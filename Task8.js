function checkIfNameHaveIf(words) {
    let value;
    if (words.startsWith("if")) {
        value = words;
    } else {
        value = "if " + words;
    }
    return value;
}
checkIfNameHaveIf("else");
checkIfNameHaveIf("if else");