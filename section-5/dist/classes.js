"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    static createEmployee(name) {
        return {
            name: name
        };
    }
    describe() {
        console.log(`The department with ${this.id} is ${this.name}.`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log('Report count: ', this.employees.length);
        console.log('Employees: ', this.employees);
    }
}
Department.fiscalYear = 2023;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'Information Technology');
        this.admins = admins;
    }
}
class AccountDepartment extends Department {
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found');
    }
    set mostRecentReport(value) {
        if (value) {
            this.addReport(value);
        }
    }
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
        this.lastReport = reports[reports.length - 1];
    }
    describe() {
        console.log('Accounting department ID: ', this.id);
    }
    addEmployee(name) {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    getReports() {
        console.log("Here's the report: ", this.reports);
    }
}
const emp1 = Department.createEmployee('Mjkhasd');
console.log(emp1, Department.fiscalYear);
const it = new ITDepartment('IT', ['Max']);
it.addEmployee('Max');
it.describe();
it.addEmployee('Tester');
it.printEmployeeInformation();
console.log(it);
const acc = new AccountDepartment('ACC', []);
acc.mostRecentReport = 'New report';
acc.addReport('Something went wrong!');
console.log(acc.mostRecentReport);
acc.getReports();
acc.addEmployee('Max');
acc.addEmployee('Willow');
acc.printEmployeeInformation();
console.log(acc);
//# sourceMappingURL=classes.js.map