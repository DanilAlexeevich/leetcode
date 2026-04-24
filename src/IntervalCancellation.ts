import { JSONValue } from "./types/types";

type Fn = (...args: JSONValue[]) => void

function cancellable(fn: Fn, args: JSONValue[], t: number): Function {
  return;
};
