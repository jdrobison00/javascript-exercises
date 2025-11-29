const removeFromArray = function() {
    let args = Array.from(arguments);

    // separate original array and items to remove
    let original = args[0];
    let remove = args.slice(1);

    let i = 0;
    while (i < remove.length) {
        let removeIndex = original.indexOf(remove[i]);;
        if (removeIndex >= 0) {
            original.splice(removeIndex, 1);
        } else {
            i++;
        }
    }
    return original;
};


// Do not edit below this line
module.exports = removeFromArray;
