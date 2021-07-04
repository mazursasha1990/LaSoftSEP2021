function checkInteger(x, y) {
    if (x > 0 && y > 0) {
        if ((x % 10) == (y % 10)) {
            return true;
        }
        return false;
    }
}
checkInteger(1, 12);
checkInteger(35, 15);