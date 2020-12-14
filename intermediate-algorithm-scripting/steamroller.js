function steamrollArray(arr) {
    let new_arr = [];
    let myisArray = function(element) {
        if (!Array.isArray(element)) {
            new_arr.push(element)
        } else {
            for (let item in element) {
                myisArray(element[item]);
            }
        }
    }
    arr.forEach(myisArray)
    return new_arr;
}

console.log(steamrollArray([[["a"]], [["b"]]]));
