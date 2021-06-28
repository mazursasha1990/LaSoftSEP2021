function checkIntegers(x, y) {
    if (x % 5 == y % 5) {
        if (x == y) {
            return 0;
        }
        else if (x < y) {
            return x;
        }
        else {
            return y;
        }
    }
    else if (x > y) {
        return x;
    }
    else {
        return y;
    }
}
checkIntegers(22, 12);
checkIntegers(110, 9);
checkIntegers(41, 41);