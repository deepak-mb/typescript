// type add = (a: number, b: number) => number;
interface add {
    (a: number, b: number): number;
}

let addition: add = (n1: number, n2: number) =>{
    return n1 + n2;
}

interface Named {
    readonly name?: string;
    output?: string;
}

interface Greetable extends Named {
    greet(phrase: string): void;
}

class Person implements Greetable {
    name?: string;
    age = 33

    constructor(n?: string){
        if(n){
            this.name = n;
        }
    }
    greet(phrase: string){
        if(this.name){
            console.log(phrase + ' ' + this.name);
        }else{
            console.log('Hi');
        }
    }
}

let user1: Greetable = new Person();

user1.greet('Hi there, I am ');

console.log(user1)