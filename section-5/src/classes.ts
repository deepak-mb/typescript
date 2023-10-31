class Department{
    static fiscalYear = 2023;
    protected employees: string[] = [];

    constructor(protected readonly id: string, public name: string){
        // this.id = id;
        // this.name = n;
    }

    static createEmployee(name: string){
        return {
            name: name
        }
    }

    describe(this: Department){
        console.log(`The department with ${this.id} is ${this.name}.`);
    }

    addEmployee(employee: string){
        this.employees.push(employee);
    }

    printEmployeeInformation(){
        console.log('Report count: ',this.employees.length)
        console.log('Employees: ', this.employees)
    }
}

class ITDepartment extends Department{
    public admins: string[];

    constructor(id: string, admins: string[]) {
        super(id, 'Information Technology');
        this.admins = admins;
    }
}

class AccountDepartment extends Department{
    private lastReport: string;

    get mostRecentReport(){
        if(this.lastReport){
            return this.lastReport;
        }
        throw new Error('No report found');
    }

    set mostRecentReport(value: string){
        if(value){
            this.addReport(value)
        }
        // throw new Error('Please send an report.');
    }

    constructor (id: string, private reports: string[]) {
        super(id, 'Accounting');
        this.lastReport = reports[reports.length-1];
    }

    describe(){
        console.log('Accounting department ID: ', this.id);
    }

    addEmployee(name: string) {
        if(name === 'Max') {
            return;
        }
        this.employees.push(name);
    }

    addReport(text: string){
        this.reports.push(text);
        this.lastReport = text;
    }

    getReports(){
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

