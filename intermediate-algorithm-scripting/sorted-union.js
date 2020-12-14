function uniteUnique(arr) {
    let args = Array.from(arguments);
    let result = []
    args.forEach(element => {
        element.forEach(item => {
            if (!result.includes(item)) {
                result.push(item);
            }
        })
    })
    return result
}

console.log(uniteUnique([1, 2, 3], [5, 2, 1]));
