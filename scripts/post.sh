#! /bin/bash

# コマンド
# ./etc/post.sh

# date書き換え
now=$(date "+%Y-%m-%dT%H:%M:%S.000Z")
img_template="/media/2021/0/00/2021_00_00__0.png"
img=$(date "+/media/%Y/%m/%d/%Y_%m_%d__0.png")
name=$(date "+%m/%Y-%m-%d.md")

# dateの書き換え
# draftの書き換え
# 画像パスの書き換え
sed "3s/2021-00-00T00:00:00.000Z/$now/g" "./content/posts/template.md" \
  | sed "6s/true/false/g" \
  | sed "s|$img_template|$img|" > "./content/posts/2021/$name"

dirname="$(date '+static/media/%Y/%m/%d')"

if  [ ! -e "$dirname" ]; then
  mkdir -p "$dirname"
fi
