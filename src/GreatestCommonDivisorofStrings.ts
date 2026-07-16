function gcdOfStrings(str1: string, str2: string): string {
  let newStr: string = "";
  let gcd = getGcd(str1.length, str2.length);
  let candidate = '';

  if (str1.length > str2.length) {
    candidate = str1.slice(0, gcd);
    if(isMadeOfSubstr(candidate, str1)){
      return candidate; 
    } else return newStr;
  } else {
    candidate = str2.slice(0, gcd);
    if(isMadeOfSubstr(candidate, str2)){
      return candidate; 
    } else return newStr;
  };
}

function getGcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return Math.abs(a);
}

function isMadeOfSubstr(str, subStr) {
  if (str.length % subStr.length !== 0) return false;
  const n = str.length / subStr.length;
  return str === subStr.repeat(n);
}

console.log(gcdOfStrings("AAAAAB", "AAA"));
