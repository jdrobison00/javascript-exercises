const repeatString = function(str, repeat) {
    if (repeat < 0) {
        return 'ERROR';
    }
    output = '';
    for(let i = 0; i < repeat; i++) {
        output += str;
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;
