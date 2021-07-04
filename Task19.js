function printOddNumbers() {
    console.log("Odd numbers between 9 to 1: ")
    for (var i = 10; i >= 0; i--) {
        if (i % 2 !== 0) {
            console.log(i);

        }
    }
}
printOddNumbers();