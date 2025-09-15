import { program as caporal } from "@caporal/core";
import type { ActionParameters } from "types";
import { conclude } from "./conclude";
import { validatePath } from "./validatePath";

export const program = caporal

program
    .argument("<sourceDir>", "Source directory", { validator: validatePath })
    .argument("<query>", "Query to satisfy")
    .action(async ({ logger, args: { sourceDir, query } }: ActionParameters) => {
        const finalAnswer = await conclude(sourceDir?.toString(), query);
        logger.info(finalAnswer);
    });