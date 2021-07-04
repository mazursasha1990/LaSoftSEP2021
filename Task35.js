function checkIntegers(x, y) {
    if (x % 5 == y % 5) {
        if (x == y) {
            console.log(0);
        }
        else if (x < y) {
            console.log(x);
        }
        else {
            console.log(y);
        }
    }
    else if (x > y) {
        console.log(x);
    }
    else {
        console.log(y);
    }
}
checkIntegers(22, 12);
checkIntegers(110, 9);
checkIntegers(41, 41);