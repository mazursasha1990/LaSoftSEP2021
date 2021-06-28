function checkString(str) {
    if (str.slice(1, 5) == "Java") {
        console.log(str.slice(5, str.length));
    }
    else console.log(str);
}
checkString("AJavaScript");
checkString("Oldjava");