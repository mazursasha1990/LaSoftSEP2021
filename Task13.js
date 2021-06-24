function greatestNumber(x, y, z) {
    if (x >= y && x >= z) {
        return "x = " + x + " is greatest."
    }
    else if (y >= x && y >= z) {
        return "y = " + y + " is greatest."
    }
    else {
        return "z = " + z + " is greatest."
    }
}
greatestNumber(10, 12, 2);