import type { FilePath } from "./validatePath";
import { infer } from "./infer";
import { files } from "./files";

export async function conclude(sourceDir: FilePath, query: string): Promise<string> {
    return await files(sourceDir).reduce<Promise<string>>(
        drawConclusion(query),
        Promise.resolve("INSUFFICIENT DATA FOR MEANINGFUL ANSWER.")
    );
}

const drawConclusion = (query: string) =>
    async (conclusion: Promise<string>, file: Buffer) =>
        await infer(file, query, await conclusion);

