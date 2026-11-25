
#!/usr/bin/env bash

set -euo pipefail

cd "$(dirname "$0")/.."

BACKGROUND="#141414"
FOREGROUND="#eeeeee"
MUTED="#a3a3a3"
ACCENT="#a5bcff"

FONT_REGULAR="$(fc-match -f '%{file}' 'DejaVu Sans:style=Book')"
FONT_BOLD="$(fc-match -f '%{file}' 'DejaVu Sans:style=Bold')"

PORTRAIT="src/assets/images/portrait.jpg"

mkdir -p public

# Apple touch icon
magick \
  -background "$BACKGROUND" \
  -density 300 \
  public/favicon.svg \
  -resize 180x180 \
  -alpha remove \
  -alpha off \
  -strip \
  public/apple-touch-icon.png

# Traditional favicon fallback
magick \
  -background none \
  -density 300 \
  public/favicon.svg \
  -resize 64x64 \
  -define icon:auto-resize=64,48,32,16 \
  public/favicon.ico

# Social-sharing image
magick \
  -size 1200x630 "xc:$BACKGROUND" \
  \( "$PORTRAIT" \
    -auto-orient \
    -resize '384x510^' \
    -gravity center \
    -extent 384x510 \
    -strip \
  \) \
  -gravity NorthWest \
  -geometry +756+60 \
  -composite \
  -font "$FONT_REGULAR" \
  -fill "$MUTED" \
  -pointsize 28 \
  -annotate +64+60 'perskawiec.cc' \
  -font "$FONT_BOLD" \
  -fill "$FOREGROUND" \
  -pointsize 76 \
  -annotate +60+185 'Wiktor' \
  -annotate +60+275 'Perskawiec' \
  -font "$FONT_REGULAR" \
  -fill "$ACCENT" \
  -pointsize 30 \
  -annotate +64+410 '@spageektti' \
  -stroke "$MUTED" \
  -strokewidth 1 \
  -draw 'line 64,569 690,569' \
  -strip \
  -colorspace sRGB \
  -quality 90 \
  public/social.jpg

echo "Website image assets generated."
