function printEvenNumbers() {
    console.log("Even numbers between 2 to 10:");
    for (var i = 1; i <= 10; i++)
        if (i % 2 == 0) {
            console.log(i);
        }
}
printEvenNumbers();