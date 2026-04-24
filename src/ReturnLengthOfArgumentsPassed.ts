import { JSONValue } from "./types/types";

function argumentsLength(...args: JSONValue[]): number {
  return args.length;
};

console.log(argumentsLength({}, null, "3", 3 , 2));
