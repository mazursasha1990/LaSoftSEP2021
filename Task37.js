function checkIntagers(x, y, z) {
    if ((y - x) <= 1 && (y - x) >= 0) {
        if ((z - x) >= 3 || (z - y) >= 3) {
            return true;
        }
    }
    else if ((z - x) <= 1 && (z - x) >= 0) {
        if ((y - x) >= 3 || (y - z) >= 3) {
            return true;
        }
    }
}
checkIntagers(1, 2, 5);