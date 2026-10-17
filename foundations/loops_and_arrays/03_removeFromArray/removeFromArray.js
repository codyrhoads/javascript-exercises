const removeFromArray = function(arr, ...toRemove) {
    return arr.filter(value => !toRemove.includes(value));
};

// Do not edit below this line
module.exports = removeFromArray;
