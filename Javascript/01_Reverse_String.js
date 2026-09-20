
// Solution 1

console.log(String("Sourov Pal".split("").reverse().join("")));

// Solution 2

function reverseString(str) {
    let len = str.length;
    let result = "";

    for (let i = len - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
}

console.log(reverseString("Sourov"));

// Solution 3
function reverseStringRecursive(str) {
    if (str === "") {
        return "";
    } else {
        return reverseStringRecursive(str.substr(1)) + str.charAt(0);
    }
}

console.log(reverseStringRecursive("Sourov Pal"));
