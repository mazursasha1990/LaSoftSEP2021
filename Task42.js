function fourDigitNumber(number) {
    number = prompt("Enter 4 digit number");
    let arrayString = Array.from(number);
    let arrayNumber = arrayString.map(i => Number(i));
    let sumOfAllNumbers = arrayNumber.reduce(function (a, b) {
        return a + b;
    });
    console.log(sumOfAllNumbers);

    for (var i = 0; i < arrayNumber.length; i++) {
        if (arrayNumber[i] === arrayNumber[i + 1]) {
            console.log("Some digit happens 2 times");
        }
    }

    if (arrayNumber[0] + arrayNumber[1] === arrayNumber[2] + arrayNumber[3]) {
        console.log("The sum of first 2 digits is the same as the sum of next 2 digits");
    }

}
fourDigitNumber();