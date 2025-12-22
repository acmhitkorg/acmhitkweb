# HITK ACM Student Chapter Website

This repository contains the source code for the official website of the HITK ACM Student Chapter.

---

## About ACM

The **Association for Computing Machinery (ACM)** is the world's largest educational and scientific computing society, uniting computing educators, researchers, and professionals to inspire dialogue, share resources, and address the field's challenges. ACM provides more than 100,000 members with the tools and resources to advance skills and career opportunities. ACM serves its members and the computing profession with leading-edge publications, conferences, and career resources.

---

## About HITK ACM Student Chapter

The **Heritage Institute of Technology (HITK) ACM Student Chapter** is a vibrant and active student-run organization dedicated to fostering a strong computing community within the college. Aligned with ACM's mission, our chapter aims to promote computer science education, facilitate professional development, and encourage innovation among students. We regularly organize workshops, coding competitions, technical talks, and various events to enhance students' skills, connect them with industry professionals, and prepare them for successful careers in technology.

### Convert image format to Webp

- Install sharp-cli globally, sharp-cli is the CLI for sharp, a high performance Node.js image processing module.

```sh
pnpm add -g sharp-cli # or npm i -g sharp-cli
```

- Convert assets from png, jpg, jpeg to webp format with 70% quality

```sh
sharp --input "png,jpg,jpeg files" \
  --format webp \
  --quality 70 \
  --output "output-path" # for current folder remove output flag
```

Example:

```sh
sharp --input "public/Events/*.{png,jpeg}" \
  --format webp \
  --quality 70 \
  --output public/Events/webp
```

- After this use the smaller sized webp images in appropriate places.

Notes

- Always use --input when converting multiple files
- Quote glob patterns to avoid shell (zsh) expansion issues

### Batch convert images to WebP and archive originals

These commands are used to optimize image assets before building the static site.

They:

- Convert all JPG/JPEG/PNG images to .webp
- Store WebP files alongside images (in a webp/ subfolder)
- Move original images out of the build to assets/originals/

#### Convert all images to WebP (recursively)

```sh
find path-to-images -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) \
| while IFS= read -r img; do
    dir="$(dirname "$img")"
    base="$(basename "${img%.*}")"
    mkdir -p "$dir/webp"

    sharp \
      --input "$img" \
      --format webp \
      --quality 70 \
      --output "$dir/webp/$base.webp"
done
```

Notes:

- Handles paths with spaces safely
- Preserves original filenames
- Creates a webp/ folder inside each image directory
- Safe to re-run (idempotent)

Optional resize (recommended for galleries):

```sh
--resize 1600
```

Insert it before --format webp if needed.

#### Move original images out of public/

```sh
find path-to-images -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) \
| while IFS= read -r img; do
    rel="${img#public/}"
    mkdir -p "assets/originals/$(dirname "$rel")"
    mv "$img" "assets/originals/$rel"
done
```

##### Result

```sh
public/           → contains only optimized .webp files
assets/originals/ → contains original JPG/PNG files (same structure)
```

#### Verify cleanup (should return nothing)

```sh
find public -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \)
```

#### Rebuild after optimization

```sh
rm -rf out
NEXT_PUBLIC_STATIC_EXPORT=true pnpm build
```

##### Reasons for this

- Prevents bloated static builds
- Reduces deploy size and I/O
- Keeps original assets safe
- Ensures predictable cPanel deployments
