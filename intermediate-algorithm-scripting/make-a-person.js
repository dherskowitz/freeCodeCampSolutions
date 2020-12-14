var Person = function(firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
    let [firstName, lastName] = firstAndLast.split(" ");
    this.getFirstName = function() {
        return firstName;
    };
    this.getLastName = function() {
        return lastName;
    }
    this.getFullName = function() {
        return this.getFirstName() + " " + this.getLastName();
    }
    this.setFirstName = function(first) {
        firstName = first;
        return firstName;
    }
    this.setLastName = function(last) {
        lastName = last;
        return lastName;
    }
    this.setFullName = function(firstAndLast) {
        [firstName, lastName] = firstAndLast.split(" ");;
        return firstName + " " + lastName;
    }
    return firstAndLast;
};

var bob = new Person('Bob Ross');
console.log(bob.getFullName());
console.log(bob.setFullName("Haskell Curry"));
