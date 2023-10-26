"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 100] = "ADMIN";
    Role[Role["READ_ONLY"] = 200] = "READ_ONLY";
    Role["AUTHOR"] = "300";
})(Role || (Role = {}));
const person = {
    name: 'Deepak',
    age: 33,
    hobbies: ['cooking', 'pokemon'],
    role: Role.ADMIN
};
console.log(person.name);
for (let hobby of person.hobbies) {
    console.log(hobby);
}
if (person.role === Role.AUTHOR) {
    console.log(person);
}
//# sourceMappingURL=objs-arr-enums.js.map