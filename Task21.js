function checkLastDigit(x, y) {
    if (x > 0 && y > 0) {
        return (x % 10 == y % 10);
    }
    return false;
}
checkLastDigit(12, 25);
heckLastDigit(12, 22);