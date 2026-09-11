import fs from "fs";
import path from "path";
import { GALLERY_CATEGORY_ORDER, type GalleryCategory } from "./gallery-categories";

// Reads public/galeria at build time and groups its files by the category
// prefix in their filename (e.g. "varandas-005.jpg" -> category "varandas"),
// so the Gallery section always reflects whatever is in that folder.
// Server-only (uses fs/path) — never import this from a client component.
export function getGalleryCategories(): Record<GalleryCategory, string[]> {
    const result = Object.fromEntries(
        GALLERY_CATEGORY_ORDER.map((cat) => [cat, [] as string[]])
    ) as Record<GalleryCategory, string[]>;

    const dir = path.join(process.cwd(), "public", "galeria");
    let files: string[] = [];
    try {
        files = fs.readdirSync(dir).filter((name) => /\.(jpe?g|png)$/i.test(name));
    } catch {
        return result;
    }

    for (const file of files) {
        const match = file.match(/^([a-z]+)-\d+\.\w+$/i);
        const cat = match?.[1] as GalleryCategory | undefined;
        if (cat && result[cat]) result[cat].push(file);
    }
    for (const cat of GALLERY_CATEGORY_ORDER) result[cat].sort();
    return result;
}
