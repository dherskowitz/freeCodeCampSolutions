function smallestCommons(arr) {
    let sorted = arr.sort((a, b)=>a-b);
    let [div, num] = sorted;

    while(div < arr[1]) {
        if (num % div === 0) {
            div++
        } else {
            num += arr[1]
            div = arr[0]
        }
    }
    return num
}

console.log(smallestCommons([1,3]));
