import { program as caporal, type Validator } from "@caporal/core";
import type { ActionParameters } from "types";
import { conclude } from "./conclude";
import { validatePath } from "./validatePath";

export const program = caporal

program
    .argument("<sourceDir>", "Source directory", { validator: validatePath })
    .argument("<query>", "Query to satisfy")
    .action(({ logger, args: { sourceDir, query } }: ActionParameters) => {
        const finalAnswer = conclude(sourceDir?.toString(), query);
        logger.info(finalAnswer);
    });