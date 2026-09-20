function countCharacterFrequency(str) {
    const frequency = {};

    for (const char of str) {
        frequency[char] = (frequency[char] || 0) + 1;
    }

    return frequency;
}

console.log(countCharacterFrequency("hello"));

/* Output
{
    h: 1,
    e: 1,
    l: 2,
    o: 1
}
*/
