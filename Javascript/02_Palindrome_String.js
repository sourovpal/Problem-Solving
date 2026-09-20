
function isPalindrome(str) {
    let left = 0, right = str.length - 1;

    while (left < right) {
        let leftChar = str[left];
        let rightChar = str[right];

        if (leftChar !== rightChar) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false

// 0-4 = m
// 1-3 = a
// 2-2 = d
