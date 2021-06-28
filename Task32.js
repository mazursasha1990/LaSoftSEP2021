function checkSequensInArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 10 && arr[i + 1] === 20 && arr[i + 2] === 30) {
            return true;
        }
        return false;
    }
}
checkSequensInArray([10, 20, 30, 40]);