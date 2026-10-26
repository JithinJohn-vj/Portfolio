#!/usr/bin/env bash
# Turn a short video into the scroll-scrubbed frame sequence used by the hero.
# Usage: scripts/make-hero-frames.sh path/to/clip.mp4 [frame-count]
set -euo pipefail

input="$1"
frames="${2:-120}"
out="$(cd "$(dirname "$0")/.." && pwd)/public/frames"

duration=$(ffprobe -v error -show_entries format=duration -of csv=p=0 "$input")
fps=$(echo "$frames / $duration" | bc -l)

rm -rf "$out"
mkdir -p "$out"
ffmpeg -loglevel error -i "$input" \
  -vf "fps=$fps,scale='min(1600,iw)':-2" \
  -q:v 5 "$out/frame_%04d.jpg"

count=$(find "$out" -name 'frame_*.jpg' | wc -l | tr -d ' ')
printf '{ "count": %s }\n' "$count" > "$out/manifest.json"
echo "Wrote $count frames to public/frames"
