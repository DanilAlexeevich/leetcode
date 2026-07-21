function compress(chars: string[]): number {
    let resIdx = 0; 
    let i = 0;     
    while (i < chars.length) {
        let groupLength = 0;
        const currentChar = chars[i]; 

        while (i < chars.length && chars[i] === currentChar) {
            groupLength++;
            i++;
        }
        chars[resIdx] = currentChar;
        resIdx++;

        if (groupLength > 1) {
            const countStr = groupLength.toString();
            for (const char of countStr) {
            chars[resIdx] = char;
                resIdx++;
            }
        }
    }
    return resIdx;
};

console.log(compress(["a", "a", "b", "b", "c", "c", "c"]));
