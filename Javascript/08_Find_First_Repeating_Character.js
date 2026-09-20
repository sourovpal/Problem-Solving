function firstRepeatingCharacter(str) {
    const seen = new Set();

    for (const char of str) {
        if (seen.has(char)) {
            return char;
        }

        seen.add(char);
    }

    return null;
}

console.log(firstRepeatingCharacter("hello")); // l
console.log(firstRepeatingCharacter("abcd"));  // null
console.log(firstRepeatingCharacter("swiss")); // s
