
function countConsonants(str) {
    const vowels = 'aeiou';
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char !== ' ' && !vowels.includes(char.toLowerCase())) {
            count++;
        }
    }

    return count;
}

console.log(countConsonants("Hello World")); // Output: 7
