// const person: {
//     name: string,
//     age: number
// } = {
//     name: 'Deepak',
//     age: 33,
//     hobbies: string[]
// }

// const person:{
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
//     name: 'Deepak',
//     age: 33,
//     hobbies: ['cooking', 'pokemon'],
//     role: [2, 'Author'],
// }

enum Role {
    ADMIN = 100,
    READ_ONLY = 200,
    AUTHOR = '300'
}

const person = {
    name: 'Deepak',
    age: 33,
    hobbies: ['cooking', 'pokemon'],
    role: Role.ADMIN
}

console.log(person.name);

for(let hobby of person.hobbies){ // Type inference auto detects hobby to be a string
    console.log(hobby);
}

// person.role.push('admin');
// person.role[1] = 123;

if(person.role === Role.AUTHOR){
    console.log(person);
}