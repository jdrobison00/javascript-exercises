const sumAll = function(start, end) {
    if( typeof start !== "number" || typeof end !== 'number' 
        || start < 0 || end < 0 || start % 1 !== 0 
        || end % 1 !== 0 ) {
        return "ERROR";
    }
    


    let numsBetween = [];
    if (start <= end) {
        for (let i = start; i <= end; i ++) {
            numsBetween.push(i);
        }
    } else {
        for (let i = end; i <= start; i++) {
            numsBetween.push(i);
        }
    }
    // console.log(numsBetween);
    return numsBetween.reduce((sum, current) => sum + current);
}; 

let sum = sumAll(4, 1);
console.log(sum);

// Do not edit below this line
module.exports = sumAll;
