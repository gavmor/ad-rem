import { program, type ActionParameters } from "@caporal/core"
import { file } from "bun"


// This program takes a source directory and a query
// and combs through its files to satisfy the query via LLM inference
// consulting both the given file, the query, and a running accumulator of
// what has been learned so far.

// Example usage:
// bun index.ts ./my-diary "what did I do last summer?"

program
  .argument("<sourceDir>", "Source directory")
  .argument("<query>", "Query to satisfy")
  .action(({ logger, args: { sourceDir, query } }: ActionParameters) => {
    const finalAnswer = sourceDir.reduce((acc:string, file:string) => infer(file, query, acc), "")
    logger.info(finalAnswer)
  })

program.run(pruneBunArtifacts(Bun.argv))


function pruneBunArtifacts(args: string[]) {
  return args.slice(2).filter(arg => !/ad-rem/.test(arg))
}
