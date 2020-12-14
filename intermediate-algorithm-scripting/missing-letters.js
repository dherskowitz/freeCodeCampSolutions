function fearNotLetter(str) {
    let alpha = "abcdefghijklmnopqrstuvwxyz";
    alpha = alpha.split("").splice(alpha.indexOf(str.split("")[0]));
    for (let i = 0; i < alpha.length; i++) {
        if (alpha[i] != str[i]) {
            return alpha[i];
        }
    }
}

console.log(fearNotLetter("abcdefgijk"));
