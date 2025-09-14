import { program } from "@caporal/core"

program
  .argument("<name>", "Name to greet")
  .action(({ logger,  args }: {logger: any, args:any}) => {
    logger.info("Hello, %s!", args.name)
  })

program.run(pruneBunArtifacts(Bun.argv))


function pruneBunArtifacts(args: string[]) {
  return args.slice(2).filter(arg => !/ad-rem/.test(arg))
}
