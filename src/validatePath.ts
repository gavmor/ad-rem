import path, { type ParsedPath } from "path";
import fs from "fs";
import { z } from "zod";

const FilePathSchema = z.string()
    .refine(val => fs.existsSync(path.resolve(val.toString())), {
    error: ({ input }) => `Path does not exist: ${input}`
});

export type FilePath = z.infer<typeof FilePathSchema>;

export const validatePath = FilePathSchema.parse;
