const palindromes = function (word) {
    const alphanumerical = "abcdefghijklmnopqrstuvwxyz0123456789";

    const cleanedString = word
        .toLowerCase()
        .split('')
        .filter(character => alphanumerical.includes(character))
        .join('');

    const reversedString = cleanedString.split('').reverse().join('');

    return reversedString === cleanedString;
};

palindromes("racecar");

// Do not edit below this line
module.exports = palindromes;
