let marks = {
    Literature: 74,
    Science: 89,
    Math: 91
};
let sum = 0;
for (let key in marks) {
    sum += marks[key]
}
console.log("Total Marks: " + sum);