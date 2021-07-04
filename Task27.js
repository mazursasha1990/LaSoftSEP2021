function checkNumber(x, y) {
    if (x === y) {
        console.log(0);
    }
    else if ((10 - x) < (10 - y)) {
        console.log(x);
    }
    else {
        console.log(y);
    }
}
checkNumber(7, 5);
checkNumber(2, 9);
checkNumber(4, 4);
