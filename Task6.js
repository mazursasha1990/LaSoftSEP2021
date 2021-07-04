function checkNumbers(a, b) {
    if (a <= 10 && b <= 10) {
        console.log(false);
    }
    else if (a <= 10 || b <= 10) {
        console.log(true);
    }
    else {
        console.log(false);
    }
}
checkNumbers(1, 15);
checkNumbers(26, 5);
checkNumbers(5, 4);