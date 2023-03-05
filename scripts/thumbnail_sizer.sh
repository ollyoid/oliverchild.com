find . -type f -name "*_thumbnail.jpg" -delete
find . -type f -name "*_thumbnail.png" -delete

for file in $(find . -type f \( -iname "*.jpg" -o -iname "*.jpeg" \)); do \
    base=$(basename "$file"); \
    dir=$(dirname "$file"); \
    newname="${dir}/${base%.*}_thumbnail.jpg"; \
    convert "$file" -resize "300x255^" -gravity center -extent 300x255 "$newname"; \
done

for file in $(find . -type f -iname "*.png"); do \
    base=$(basename "$file"); \
    dir=$(dirname "$file"); \
    newname="${dir}/${base%.*}_thumbnail.png"; \
    convert "$file" -resize "300x255^" -gravity center -extent 300x255 "$newname"; \
done
