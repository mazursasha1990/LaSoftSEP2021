function createNewString(str) {
    if (str.startsWith("ps")) {
        console.log("ps");
    }
    else {
        console.log(" ");
    }
}
let string = prompt("Enter a text: ");
createNewString(string);