import fs from "fs";
import path from "path";

// Reads the gallery photo filenames from public/galeria at build time so
// the Gallery section always reflects whatever is in that folder, without
// needing a hardcoded list.
export function getGalleryPhotos(): string[] {
    const dir = path.join(process.cwd(), "public", "galeria");
    try {
        return fs
            .readdirSync(dir)
            .filter((name) => /\.(jpe?g|png)$/i.test(name))
            .sort();
    } catch {
        return [];
    }
}
