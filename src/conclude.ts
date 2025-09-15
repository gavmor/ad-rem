


export function conclude(sourceDir: string | number | boolean | ParserTypes[] | undefined, query: string | number | boolean | ParserTypes[] | undefined) {
    return sourceDir.reduce((acc: string, file: string) => infer(file, query, acc), "");
}
