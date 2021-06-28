function printOddNumbers() {
    for (var i = 10; i >= 0; i--)
        if (i % 2 !== 0) {
            document.write(i + "<br>")
        }
}
printOddNumbers();