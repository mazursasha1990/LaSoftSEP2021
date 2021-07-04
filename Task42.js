function fourDigitNumber(number) {
    let numberToString = String(number);
    let arrayString = Array.from(numberToString);
    let arrayNumber = arrayString.map(i => Number(i));
    let sumOfAllNumbers = arrayNumber.reduce(function (a, b) {
        return a + b;
    });

    for (let i = 0; i <= arrayNumber.length; i++) {
        if (arrayNumber[i] === arrayNumber[i + 1]) {
            return true;
        }
    }

    if (arrayNumber[0] + arrayNumber[1] === arrayNumber[2] + arrayNumber[3]) {
        return true;
    }

}
fourDigitNumber(5141);