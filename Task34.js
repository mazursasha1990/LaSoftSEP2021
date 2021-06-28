function checkNumbers(x, y, z) {
    if ((x - y) >= 20 || (x - z) >= 20 || (y - x) >= 20 || (y - z) >= 20 || (z - x) >= 20 || (z - y) >= 20) {
        return true;
    }
}
checkNumbers(10, 15, 20);