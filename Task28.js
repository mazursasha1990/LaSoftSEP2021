function checkNumber(x, y) {
    if (((x >= 10 && x <= 20) && (y >= 10 && y <= 20)) || ((x >= 20 && x <= 30) && (y >= 20 && y <= 30))) {
        console.log(true);
    }
    else {
        console.log(false);
    }
}
checkNumber(17, 15);
checkNumber(2, 9);
checkNumber(24, 20);
checkNumber(2, 35);