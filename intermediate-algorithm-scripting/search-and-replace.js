function myReplace(str, before, after) {
    let args = Array.from(arguments);
    let find = args[1];
    let replace = args[2];
    let findIsCapital = find[0] == find[0].toUpperCase();
    if (findIsCapital) {
        let arr = replace.split('');
        let str = arr[0].toUpperCase() + arr.splice(1,arr.length).join('');
        return args[0].replace(find,str)
    } else {
        return args[0].replace(find,replace.toLowerCase())
    }
}

console.log(myReplace("I think we should look up there", "up", "Down"));
// console.log(myReplace("This has a spellngi error", "spellngi", "spelling"));
// console.log(myReplace("His name is Tom", "Tom", "john"));
// console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms"));
