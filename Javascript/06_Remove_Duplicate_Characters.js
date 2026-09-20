// Solution: 1

function removeDuplicateCharacters(str) {
    let result = '';

    for (const char of str) {
        if (!result.includes(char)) {
            result += char;
        }
    }

    return result;
}

console.log(removeDuplicateCharacters("programming"));
// "progamin"

// Solution: 2

function removeDuplicateCharacters(str) {
    return [...new Set(str)].join('');
}

console.log(removeDuplicateCharacters("programming"));
// "progamin"
