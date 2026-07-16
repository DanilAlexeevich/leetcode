import { JSONValue } from "./types/types";

function mergeAlternately(word1: string, word2: string): JSONValue {
  let newStr: string = "";
  for (let i = 0; i < word1.length || i < word2.length; i++) {
    if (i < word1.length) newStr += word1[i];
    if (i < word2.length) newStr += word2[i];
  }
  return newStr;
}

console.log(mergeAlternately("abcd", "pq"));
