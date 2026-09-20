function firstNonRepeatingCharacter(str) {
    const frequency = {};

    // Step 1: Count each character
    for (const char of str) {
        frequency[char] = (frequency[char] || 0) + 1;
    }

    // Step 2: Find first character with count 1
    for (const char of str) {
        if (frequency[char] === 1) {
            return char;
        }
    }

    return null;
}

console.log(firstNonRepeatingCharacter("swiss"));  // w
console.log(firstNonRepeatingCharacter("aabbcc")); // null
console.log(firstNonRepeatingCharacter("leetcode")); // l
