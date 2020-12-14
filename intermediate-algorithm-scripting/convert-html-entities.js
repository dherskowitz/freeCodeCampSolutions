function convertHTML(str) {
    let chars = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        '\'': '&apos;',
    }
    str = str.split('')
    let charKeys = Object.keys(chars)
    str.forEach((element, idx) => {
        if (charKeys.includes(element)) {
            str[idx] = chars[element]
        }
    });
    return str.join('');
}

console.log(convertHTML("Hamburgers < Pizza < Tacos"));
