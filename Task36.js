function checkIntagers(x, y) {
    if (x >= 10 && x <= 99 && y >= 10 && y <= 99) {
        if (Math.floor(x / 10) == Math.floor(y / 10) || Math.floor(x / 10) == y % 10 || x % 10 == Math.floor(y / 10) || x % 10 == y % 10) {
            return true;
        }
    }
}
checkIntagers(5, 25);