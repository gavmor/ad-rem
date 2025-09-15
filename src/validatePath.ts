import path from "path";
import fs from "fs";

export function validatePath(value: any): string {
    const resolvedPath = path.resolve(value);
    if (!fs.existsSync(resolvedPath))
        throw `Source directory does not exist: ${resolvedPath}`;
    return resolvedPath;
}
