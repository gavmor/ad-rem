import path from "path";
import type { FilePath } from "./validatePath";
import fs from "fs";
import { infer } from "./infer";

export function conclude(sourceDir: FilePath, query: string) {
    return files(sourceDir).reduce(drawConclusion(query), "INSUFFICIENT DATA FOR MEANINGFUL ANSWER.");
}

const drawConclusion = (query: string) =>
    (conclusion: string, file: Buffer) =>
        infer(file, query, conclusion);

const files = (sourceDir: string) => fs
    .readdirSync(sourceDir)
    .map(file => fs.readFileSync(path.join(sourceDir, file)));


