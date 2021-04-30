#! /bin/bash

# date書き換え
year=2021
now=$(date "+%Y-%m-%dT%H:%M:%S.000Z")
img_template="/media/${year}/0/00/${year}_00_00__0.png"
img=$(date "+/media/%Y/%m/%d/%Y_%m_%d__0.png")
name=$(date "+%m/%Y-%m-%d.md")
dir=$(date "+%m")

mkdir -p "./content/posts/${year}/$dir"

# dateの書き換え
# draftの書き換え
# 画像パスの書き換え
sed "3s/${year}-00-00T00:00:00.000Z/$now/g" "./content/posts/template.md" \
  | sed "6s/true/false/g" \
  | sed "s|$img_template|$img|" > "./content/posts/${year}/$name"

static_dirname="$(date '+static/media/%Y/%m/%d')"
mkdir -p "$static_dirname"
