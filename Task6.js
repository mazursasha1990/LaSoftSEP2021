function checkNumbers(a, b) {
    if (a <= 10 && b <= 10) {
        return false
    }
    else if (a <= 10 || b <= 10) {
        return true;
    }
    else {
        return false;
    }
}
checkNumbers(1, 15);
checkNumbers(26, 5);
checkNumbers(5, 4);