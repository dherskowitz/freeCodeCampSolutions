function rot13(str) {
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let shiftedAlphabet = alphabet.slice(13) + alphabet.slice(0,13)
    let decoded = []
    for (let i = 0; i <= str.length; i++) {
        if (shiftedAlphabet.indexOf(str[i]) != -1) {
            decoded.push(alphabet[shiftedAlphabet.indexOf(str[i])])
        } else {
            decoded.push(str[i])
        }
    }
    return decoded.join('');
}

console.log(rot13("SERR PBQR PNZC"));
