import path from "path";
import type { FilePath } from "./validatePath";
import fs from "fs";

export function conclude(sourceDir: FilePath, query: string) {
    //  How might we lazily read the contents of all the files from a directory in Bun?
    //  Or is it adequate to read them all into memory at once?
    const files = fs.readdirSync(sourceDir)
        .map(file => fs.readFileSync(path.join(sourceDir, file)));

    return files.reduce(drawConclusion(query), "INSUFFICIENT DATA FOR MEANINGFUL ANSWER.");
}

const drawConclusion = (query: string) =>
    (conclusion: string, file: Buffer) =>
        infer(file, query, conclusion);


function infer(file: Buffer, query: string, soFar: string) {
    // Placeholder for LLM inference logic
    return `Inferred from ${file} with query "${query}" and so far "${soFar}"\n`;
}
