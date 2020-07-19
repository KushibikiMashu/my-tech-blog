#! /bin/sh

for x in $(find . -type file | grep 2020_6_ )
do
  file=$(echo "$x" | sed "s/2020_6_/2020_06_/g")
  mv "$x" "$file"
done
