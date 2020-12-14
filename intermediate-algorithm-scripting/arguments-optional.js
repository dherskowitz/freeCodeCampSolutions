function addTogether() {
    let args = Array.from(arguments);
    if (args.length == 1) {
        if (!Number.isInteger(args[0])) {
            return undefined
        }
        return function(n) {
            if (!Number.isInteger(n)) {
                return undefined
            }
            return n + args[0]
        }
    } else {
        if (!Number.isInteger(args[0]) || !Number.isInteger(args[1])) {
            return undefined
        }
        return args[0] + args[1]
    }
}

console.log(addTogether("http://bit.ly/IqT6zt"));
console.log(addTogether(2)([3]));
