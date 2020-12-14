function palindrome(str) {
    let regex = new RegExp(/^[a-z0-9]+$/i)
    let new_str = str.split("").filter(element => regex.test(element)).join("").toLowerCase();
    console.log(new_str);
    return new_str == new_str.split("").reverse().join('');
}

console.log(palindrome("A man, a plan, a canal. Panama"));
