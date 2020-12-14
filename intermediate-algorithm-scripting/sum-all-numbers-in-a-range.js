function sumAll(arr) {
    let total = 0;
    arr.sort((a, b) => a - b);
    for (let i = arr[0]; i <= arr[arr.length - 1]; i++)  {
        total += i;
    }
    return total;
}

console.log(sumAll([10,5]))
