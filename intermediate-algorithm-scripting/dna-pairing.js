function pairElement(str) {
    let str_arr = str.split('')
    let pairs = {
        A: "T",
        T: "A",
        G: "C",
        C: "G",
    }
    return str_arr.map(element => {
        return [element, pairs[element]]
    });
    // return str;
}

console.log(pairElement("TTGAG"));
