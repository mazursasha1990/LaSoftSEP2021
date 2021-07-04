function checkString(str) {
    if (str.startsWith("if")) {
        console.log(true);
    }
    else {
        console.log(false);
    }
}
checkString("if string");
checkString("string");