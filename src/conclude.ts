import path from "path";
import type { FilePath } from "./validatePath";
import fs from "fs";
import { infer } from "./infer";

export async function conclude(sourceDir: FilePath, query: string): Promise<string> {
    return await files(sourceDir).reduce<Promise<string>>(
        drawConclusion(query),
        Promise.resolve("INSUFFICIENT DATA FOR MEANINGFUL ANSWER.")
    );
}

const drawConclusion = (query: string) =>
    async (conclusion: Promise<string>, file: Buffer) =>
        await infer(file, query, await conclusion);

const files = (sourceDir: string) => fs
    .readdirSync(sourceDir)
    .map(file => fs.readFileSync(path.join(sourceDir, file)));


