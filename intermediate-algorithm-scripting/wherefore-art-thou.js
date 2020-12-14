function whatIsInAName(collection, source) {
    var arr = [];
    // Only change code below this line
    let keys = Object.keys(source);
    arr = collection.filter(element => {
        return keys.every(function(key) {
            return element.hasOwnProperty(key) && element[key] === source[key];
          });
    });

    // Only change code above this line
    return arr;
}

console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }));
