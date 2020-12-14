function isPrime(num) {
    for(var i = 2; i < num; i++)
        if(num % i === 0) return false;
    return num > 1;
}

function sumPrimes(num) {
    let total = 0;
    for (let i = 2; i <= num; i++) {
        if (isPrime(i)) {
            total += i;
        }
    }
    return total;
}

console.log(sumPrimes(977));
