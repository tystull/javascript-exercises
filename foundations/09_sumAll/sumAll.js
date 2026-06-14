const sumAll = function(int1, int2) {
    if (int1 < 0 ||  
        int2 < 0 || 
        typeof int1 != 'number' || 
        typeof int2 != 'number' ||
        int1 % 1 != 0 ||
        int2 % 1 != 0
        ) {
        return 'ERROR';
    }

    let firstNum = int1;
    let secondNum = int2;
    if (int1 > int2) {
        firstNum = int2;
        secondNum = int1;
    } 

    let sum = 0;
    for (let i = firstNum; i <= secondNum; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
