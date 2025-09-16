import fs from "fs";
import path from "path";

export const files = (sourceDir: string): Buffer[] => fs
    .readdirSync(sourceDir)
    .flatMap(file => {  
        const fullPath = path.join(sourceDir, file);
        return fs.lstatSync(fullPath).isDirectory() 
            ? files(fullPath)
            : [fs.readFileSync(fullPath)];
    });
