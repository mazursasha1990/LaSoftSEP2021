function createNewString(str) {
    if (str.length >= 1) {
        console.log((str.charAt(str.length - 1)) + str + str.charAt(str.length - 1));
    }
}
createNewString("abc");
createNewString("abcd");
createNewString("java");