import type { FilePath } from "./validatePath";

export function conclude(sourceDir: FilePath, query: string) {
    return sourceDir.reduce((acc: string, file: string) => infer(file, query, acc), "");
}
