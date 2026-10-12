#!/usr/bin/env python3
"""Detect comic-page panels (XY-cut on gutters) and write data/comic-panels.js.
Usage: python3 tools/detect-panels.py [--preview DIR]
Rectangles are fractions (x,y,w,h) of the page, in reading order. Pages already in
data/comic-panels.js flagged "manual":true are left alone (made with tools/panel-marker.html)."""
import glob, json, os, re, sys
import numpy as np
from PIL import Image, ImageDraw
ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
OUT = os.path.join(ROOT, "data", "comic-panels.js")

def dark_mask(im):
    a = np.asarray(im.convert("L"), dtype=np.uint8)
    return a < 235   # 'non-paper' pixels; gutters are near-white
def cuts(profile, thr, mingap):
    """return list of (start,end) non-gutter spans"""
    inside = profile > thr
    spans, s = [], None
    for i, v in enumerate(inside):
        if v and s is None: s = i
        if not v and s is not None:
            spans.append([s, i]); s = None
    if s is not None: spans.append([s, len(inside)])
    merged = []
    for sp in spans:
        if merged and sp[0] - merged[-1][1] < mingap: merged[-1][1] = sp[1]
        else: merged.append(sp)
    return merged
def split(m, x0, y0, x1, y1, axis, depth=0):
    sub = m[y0:y1, x0:x1]
    if sub.size == 0: return []
    prof = sub.mean(axis=1 if axis == 0 else 0)          # axis0: rows (horizontal cuts)
    spans = cuts(prof, 0.06, 4)
    spans = [s for s in spans if (s[1] - s[0]) > 0.06 * (sub.shape[0] if axis == 0 else sub.shape[1])]
    if len(spans) <= 1:
        if depth > 0 and len(spans) == 1:
            s = spans[0]
            if axis == 0: y0, y1 = y0 + s[0], y0 + s[1]
            else: x0, x1 = x0 + s[0], x0 + s[1]
            # try the other axis once more on the trimmed rect
            other = cuts(sub[s[0]:s[1]].mean(axis=0) if axis == 0 else sub[:, s[0]:s[1]].mean(axis=1), 0.004, 5) if True else []
        return [(x0, y0, x1, y1)] if depth > 0 or len(spans) == 0 else split(m, x0, y0, x1, y1, 1 - axis, depth + 1)
    out = []
    for s in spans:
        if axis == 0: out += split(m, x0, y0 + s[0], x1, y0 + s[1], 1, depth + 1)
        else: out += split(m, x0 + s[0], y0, x0 + s[1], y1, 0, depth + 1)
    return out
def detect(path):
    """Panels = filled connected blobs of non-paper pixels (borders are continuous, gutters near-white)."""
    from scipy import ndimage as ndi
    im = Image.open(path); g = np.asarray(im.convert("L"), dtype=np.uint8)
    H, W = g.shape
    nonpaper = g < 235
    nonpaper = ndi.binary_opening(nonpaper, structure=np.ones((3, 3)))   # drop specks in gutters
    filled = ndi.binary_fill_holes(nonpaper)
    lab, n = ndi.label(filled)
    objs = ndi.find_objects(lab)
    rects = []
    for i, sl in enumerate(objs):
        y0, y1, x0, x1 = sl[0].start, sl[0].stop, sl[1].start, sl[1].stop
        if (y1 - y0) * (x1 - x0) < 0.02 * W * H: continue
        rects.append([x0, y0, x1, y1])
    # reading order: group into rows by vertical overlap, then left→right
    rects.sort(key=lambda r: (r[1], r[0]))
    rows = []
    for r in rects:
        for row in rows:
            top = min(q[1] for q in row); bot = max(q[3] for q in row)
            ov = min(bot, r[3]) - max(top, r[1])
            if ov > 0.5 * min(r[3] - r[1], bot - top): row.append(r); break
        else: rows.append([r])
    rects = [r for row in sorted(rows, key=lambda row: min(q[1] for q in row)) for r in sorted(row, key=lambda q: q[0])]
    pad = 0.004
    res = [[round(max(0, x0/W-pad), 4), round(max(0, y0/H-pad), 4), round(min(1, (x1-x0)/W+2*pad), 4), round(min(1, (y1-y0)/H+2*pad), 4)] for x0, y0, x1, y1 in rects]
    if not res: res = [[0, 0, 1, 1]]
    return res, im
def main():
    prev = sys.argv[sys.argv.index("--preview")+1] if "--preview" in sys.argv else None
    data = {}
    if os.path.exists(OUT):
        txt = open(OUT).read(); mm = re.search(r"=\s*(\{.*\});?\s*$", txt, re.S)
        if mm: data = json.loads(mm.group(1))
    for p in sorted(glob.glob(os.path.join(ROOT, "images", "t*", "w*", "*-comic.*"))):
        key = os.path.basename(p).rsplit(".", 1)[0]
        if data.get(key, {}).get("manual"): continue
        r, im = detect(p)
        data[key] = {"panels": r}
        print(key, len(r), "panels")
        if prev:
            os.makedirs(prev, exist_ok=True); d = ImageDraw.Draw(im)
            for i, (x, y, w, h) in enumerate(r):
                d.rectangle([x*im.width, y*im.height, (x+w)*im.width, (y+h)*im.height], outline=(255, 0, 0), width=6)
                d.text((x*im.width+14, y*im.height+14), str(i+1), fill=(255, 0, 0))
            im.thumbnail((700, 1000)); im.save(os.path.join(prev, key + ".png"))
    with open(OUT, "w") as f:
        f.write("/* Comic-page panel rectangles (fractions x,y,w,h of the page, reading order).\n   Auto-detected by tools/detect-panels.py; fix a page by hand with tools/panel-marker.html\n   (paste its JSON here and add \"manual\":true so it is not overwritten). */\nwindow.ML_COMIC_PANELS = " + json.dumps(data, indent=1) + ";\n")
main()
