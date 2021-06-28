function checkNumber(x, y) {
    if (x === y) {
        return 0;
    }
    else if ((10 - x) < (10 - y)) {
        return x;
    }
    else return y;
}
checkNumber(7, 5);
checkNumber(2, 9);
checkNumber(4, 4);
