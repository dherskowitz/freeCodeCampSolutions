function sumFibs(num) {
    let arr = [1, 1]
    for (let i = 0; i <= num; i++) {
        if (i > 1) {
            arr.push(arr[i - 1] + arr[i - 2]);
        }
    }
    let odds = arr.filter(el => el <= num && el % 2 != 0)
    let total = 0;
    odds.forEach(el => total += el)
    return total;
}

console.log(sumFibs(75025));
