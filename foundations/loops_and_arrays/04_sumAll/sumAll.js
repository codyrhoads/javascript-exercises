const sumAll = function(endpoint1, endpoint2) {
    let notInteger = !Number.isInteger(endpoint1) || !Number.isInteger(endpoint2);
    let notNegative = endpoint1 < 0 || endpoint2 < 0;

    if (notInteger || notNegative) {
        return "ERROR";
    }

    let smaller = endpoint1 <= endpoint2 ? endpoint1 : endpoint2;
    let larger = endpoint1 > endpoint2 ? endpoint1 : endpoint2;
    let sum = 0;

    while (smaller <= larger) {
        sum += smaller;
        smaller++;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
