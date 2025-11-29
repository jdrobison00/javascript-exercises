const reverseString = function(str) {
    strArray = str.split('');
    
    let reversed = [];
    while(strArray.length > 0) {
        reversed.push(strArray.pop());
    }

    return reversed.join('');
};

// Do not edit below this line
module.exports = reverseString;
