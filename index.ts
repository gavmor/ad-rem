import { program } from "./src/program";

program.run(pruneBunArtifacts(Bun.argv))

function pruneBunArtifacts(args: string[]) {
  return args.slice(2).filter(arg => !/ad-rem/.test(arg));
}
