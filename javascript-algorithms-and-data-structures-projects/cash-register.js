function checkCashRegister(price, cash, cid) {
    const denom = { "PENNY": 1, "NICKEL": 5, "DIME": 10, "QUARTER": 25, "ONE": 100, "FIVE": 500, "TEN": 1000, "TWENTY": 2000, "ONE HUNDRED": 10000 }
    let changeDue = (cash * 100 - price * 100);
    const register = cid.reverse().map(el => [el[0], Math.round(el[1]*100)]);
    const registerTotal = register.reduce((sum, elem) => (sum + elem[1]), 0);

    if (changeDue > registerTotal) {
        return {status: "INSUFFICIENT_FUNDS", change: []}
    } 
    if (changeDue === registerTotal) {
        return {status: "CLOSED", change: cid.reverse()}
    }

    let partial;
    let change = register.reduce((acc, elem) => {
        partial = Math.min(elem[1], Math.floor(changeDue / denom[elem[0]]) * denom[elem[0]]);
        if ( partial > 0 ) {
            changeDue -= partial;
            acc.push([elem[0], partial / 100]);
        } return acc;
    }, [])

    if (changeDue > 0) {
        return {status: "INSUFFICIENT_FUNDS", change: []}
    }
    return {status: "OPEN", change: change}
}


console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));

