"use strict";
let addition = (n1, n2) => {
    return n1 + n2;
};
class Person {
    constructor(n) {
        this.age = 33;
        if (n) {
            this.name = n;
        }
    }
    greet(phrase) {
        if (this.name) {
            console.log(phrase + ' ' + this.name);
        }
        else {
            console.log('Hi');
        }
    }
}
let user1 = new Person();
user1.greet('Hi there, I am ');
console.log(user1);
//# sourceMappingURL=app.js.map