function repeatStringNumTimes(string, times) {
    if (times > 0)
        return string.repeat(times);
    else
        return "";
}
console.log(repeatStringNumTimes("a", 1));
console.log(repeatStringNumTimes("a", 2));
console.log(repeatStringNumTimes("a", 3));
console.log(repeatStringNumTimes("a", 4));
console.log(repeatStringNumTimes("a", 5));