function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    arr.map(element => {
        let orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earthRadius + element.avgAlt, 3) / GM));
        delete element.avgAlt;
        element.orbitalPeriod = orbitalPeriod;
    })
    return arr;
}

console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));
