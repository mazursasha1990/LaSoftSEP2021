function greatestNumber(x, y, z) {
    if (x >= y && x >= z) {
        console.log("x = " + x + " is greatest.");
    }
    else if (y >= x && y >= z) {
        console.log("y = " + y + " is greatest.");
    }
    else {
        console.log("z = " + z + " is greatest.");
    }
}
greatestNumber(1, 5, 2);