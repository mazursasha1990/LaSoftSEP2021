function firstToLast(str) {
    if (str.length <= 1) {
        return str;
    }
    let midlOfStr = str.substring(1, str.length - 1);
    return (str.charAt(str.length - 1)) + midlOfStr + str.charAt(0);
}
console.log(firstToLast("Python"));
console.log(firstToLast("Java"));