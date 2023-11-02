"use strict";
var _a;
const e1 = {
    name: 'Max',
    privilages: ['create server'],
    startDate: new Date()
};
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
const numberResult = add(5, 3);
const stringResult = add('5', '3');
const fetchUserData = {
    id: 'id1',
    name: 'Max',
    job: {
        title: 'CEO',
        description: 'My own company'
    }
};
console.log((_a = fetchUserData === null || fetchUserData === void 0 ? void 0 : fetchUserData.job) === null || _a === void 0 ? void 0 : _a.title);
const userInput = '';
const storedData = userInput !== null && userInput !== void 0 ? userInput : 'DEFAULT';
function printEmployeeInformation(emp) {
    console.log('Name: ', emp.name);
    if ('privilages' in emp) {
        console.log('Privilages: ', emp.privilages);
    }
    if ('startDate' in emp) {
        console.log('Start date: ', emp.startDate);
    }
}
printEmployeeInformation(e1);
class Car {
    drive() {
        console.log('Driving a car');
    }
}
class Truck {
    drive() {
        console.log('Driving a truck');
    }
    loadCargo(amount) {
        console.log('Loading cargo: ', amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
        default:
            break;
    }
    console.log('Moving with a speed of ' + speed);
}
moveAnimal({ type: 'bird', flyingSpeed: 200 });
const userInputElement = document.getElementById('user-input');
userInputElement.value = 'Hi';
const errorBag = {
    email: 'Not a valid email',
    userName: 'Must start with capital'
};
//# sourceMappingURL=app.js.map