function checkInteger(x, y) {
    if (x == 11 || y == 11) {
        return 11;
    }
    else if ((x + y) == 11) {
        return 11;
    }
    else if ((x - y) == 11 || (y - x) == 11) {
        return 11;
    }
}
checkInteger(25, 10);