function truthCheck(collection, pre) {
    let count = 0;
    collection.forEach(element => {
        console.log(element);
        let keys = Object.keys(element);
        if (element[pre]) {
            count += 1;
        }
    });
    return count == collection.length ? true : false;
}

console.log(truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastForward", "onBoat": true}], "onBoat"));
