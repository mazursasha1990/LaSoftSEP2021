function createNewString(str, copies) {
    if (str.lenghth <= 3) {
        return str.repeat(copies);
    }
    else {
        return str.slice(0, 3).repeat(copies);
    }
}
createNewString("abc", 1);
createNewString("abcdsdf", 2);
createNewString("abczcz", 1);
createNewString("abc", 2);
createNewString("abcdddc", 1);
createNewString("ab", 2);