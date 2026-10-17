const repeatString = function(str, num) {
    if (num < 0) {
        return "ERROR";
    }

    let returnStr = "";

    for (let i = 0; i < num; i++) {
        returnStr += str;
    }

    return returnStr;
};

// Do not edit below this line
module.exports = repeatString;
