
// Solution 1

function isAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    const sorted1 = str1.split('').sort().join('');
    const sorted2 = str2.split('').sort().join('');

    return sorted1 === sorted2;
}

console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world"));   // false



// Solution 2
function isAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    const count = {};

    for (const char of str1) {
        count[char] = (count[char] || 0) + 1;
    }

    for (const char of str2) {
        if (!count[char]) {
            return false;
        }

        count[char]--;
    }

    return true;
}

console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("rat", "car"));       // false
