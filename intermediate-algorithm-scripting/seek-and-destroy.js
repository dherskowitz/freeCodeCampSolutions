function destroyer(arr) {
    let args = Array.from(arguments);
    args.shift();
    for (let i = 0; i <= arr.length; i++) {
        if (args.includes(arr[i])) {
            arr.splice(arr.indexOf(arr[i]), 1);
            i--; //lower index after removal
        }
    }
    return arr;
}

console.log(destroyer(["tree", "hamburger", 53], "tree", 53));
