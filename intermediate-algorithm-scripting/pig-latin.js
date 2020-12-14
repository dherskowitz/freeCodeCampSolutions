function translatePigLatin(str) {
    let vowels = "aeiou"; //['a','e','i','o','u'];
    let firstLetter = str.split('')[0];
    if (vowels.includes(firstLetter)) {
        return str + "way";
    } else {
        let suffix = []
        let str_arr = str.split('');
        for (let i = 0; i < str_arr.length; i++) {
            console.log(str_arr[i]);
            if (vowels.includes(str_arr[i])) {
                break;
            }
            suffix.push(str_arr.shift());
            i--;
        }
        return str_arr.join('') + suffix.join('') + "ay";
    }
}

console.log(translatePigLatin("california"));
console.log(translatePigLatin("paragraphs"));
console.log(translatePigLatin("glove"));
console.log(translatePigLatin("algorithm"));
