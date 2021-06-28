function checkNumber(x, y) {
    if (((x >= 10 && x <= 20) && (y >= 10 && y <= 20)) || ((x >= 20 && x <= 30) && (y >= 20 && y <= 30))) {
        return true;
    }
    else return false;
}
checkNumber(17, 15);
checkNumber(2, 9);
checkNumber(24, 20);
checkNumber(2, 35);