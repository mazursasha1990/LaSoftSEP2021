function countNumberInArr(arr) {
    var count = 0;
    for (var i = 0; i < arr.length; ++i) {
        if (arr[i] == 5) {
            count++;
        }
    }
    console.log(count);
}
countNumberInArr([1, 3]);
countNumberInArr([1, 3, 5]);
countNumberInArr([1, 5, 5, 3]);