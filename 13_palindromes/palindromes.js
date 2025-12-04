const palindromes = function (string) {
    const alphaNumerical = 'abcdefghijklmnopqrstuvwxyz1234567890';
    const cleanedArr = string.toLowerCase().split("")
    .filter(char => alphaNumerical.includes(char));

    let cleanedString = cleanedArr.slice().join("");

    let reversedArr = [];
    for(let i = 0; i < cleanedString.length; i++) {
        reversedArr.push(cleanedArr.pop());
    }

    console.log(reversedArr);

    reversedString = reversedArr.join("");

    return reversedString === cleanedString;
};

// Do not edit below this line
module.exports = palindromes;
