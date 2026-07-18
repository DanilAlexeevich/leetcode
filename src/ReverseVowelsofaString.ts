function reverseVowels(s: string): string {
  let index = 0;
  let onlyVowelsReverse = s.replace(/[^aeiou]/gi, '').split('').reverse().join('');
  let result = s.replace(/[aeiou]/gi, () => onlyVowelsReverse[index++] || '*');

  return result;
};  

console.log(reverseVowels("a."));