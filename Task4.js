function checkString(str) {
    if (str.startsWith("if")) {
        console.log("true");
    }
    else {
        console.log("false");
    }
}
let string = prompt("Enter a text: ");
checkString(string);