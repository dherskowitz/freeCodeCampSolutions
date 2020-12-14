function diffArray(arr1, arr2) {
    var newArr = [];
    arr1.forEach(j => {
        if (!arr2.includes(j)) {
            newArr.push(j)
        }
    })
    arr2.forEach(j => {
        if (!arr1.includes(j)) {
            newArr.push(j)
        }
    })
    return newArr;
}

console.log(diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]));
