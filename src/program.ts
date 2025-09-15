import { program as caporal } from "@caporal/core";
import type { ActionParameters } from "types";
import { validatePath } from "./validatePath";
import { conclude } from "./conclude";

export const program = caporal

program
    .argument("<sourceDir>", "Source directory", { validator: validatePath })
    .argument("<query>", "Query to satisfy")
    .action(({ logger, args: { sourceDir, query } }: ActionParameters) => {
        const finalAnswer = conclude(sourceDir?.toString(), query);
        logger.info(finalAnswer);
    });