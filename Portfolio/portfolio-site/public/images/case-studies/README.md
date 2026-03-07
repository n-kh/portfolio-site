# Case Study Images Directory

This directory contains images for your case studies.

## Image Guidelines

### Hero Images
- **Dimensions**: 1200x600px (16:9 ratio recommended)
- **Purpose**: Large banner image on case study detail pages
- **Naming**: `project-slug-hero.jpg` (e.g., `ai-recommendation-hero.jpg`)

### Thumbnails
- **Dimensions**: 600x400px (3:2 ratio recommended)
- **Purpose**: Card images on case studies listing and homepage
- **Naming**: `project-slug-thumb.jpg` (e.g., `ai-recommendation-thumb.jpg`)

## Best Practices

1. **File Format**: Use JPG for photos, PNG for graphics with transparency
2. **File Size**: Keep under 500KB per image for fast loading
3. **Compression**: Use [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/) to compress images
4. **Naming**: Use lowercase, hyphens for spaces, match your case study slug
5. **Alt Text**: Automatically generated from case study title

## File Organization

```
case-studies/
├── ai-recommendation-hero.jpg
├── ai-recommendation-thumb.jpg
├── intelligent-search-hero.jpg
├── intelligent-search-thumb.jpg
├── ml-document-processing-hero.jpg
└── ml-document-processing-thumb.jpg
```

## Adding Images

1. Place your images in this directory
2. Reference them in `data/case-studies.ts`:
   ```typescript
   heroImage: "/images/case-studies/your-project-hero.jpg",
   thumbnail: "/images/case-studies/your-project-thumb.jpg",
   ```

## Placeholder Images

If you don't have images yet, you can use placeholder services:
- [Unsplash Source](https://source.unsplash.com/1200x600/?technology)
- [Placeholder.com](https://via.placeholder.com/1200x600)

Example using a placeholder:
```typescript
heroImage: "https://source.unsplash.com/1200x600/?technology,ai",
thumbnail: "https://source.unsplash.com/600x400/?technology,ai",
```
