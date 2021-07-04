function checkNumber(x, y) {
    if (x > 0 && y > 0) {
        if ((x >= 20 && x <= 30) && (y >= 20 && y <= 30)) {
            if (x > y) {
                console.log(x);
            }
            else {
                console.log(y);
            }
        }
        else {
            console.log(0);
        }
    }
}
checkNumber(2, 35);
checkNumber(29, 22);
checkNumber(21, 30);
checkNumber(12, 24);
