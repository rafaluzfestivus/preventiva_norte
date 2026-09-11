// Client-safe: no filesystem imports here, so components that need the
// category list/type (like Gallery.tsx) don't pull `fs`/`path` into the
// browser bundle. Keep the actual file-reading logic in gallery.ts.

export const GALLERY_CATEGORY_ORDER = [
    "varandas",
    "terracos",
    "janelas",
    "quadras",
    "outras",
    "detalhes",
] as const;

export type GalleryCategory = (typeof GALLERY_CATEGORY_ORDER)[number];
