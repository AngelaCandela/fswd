// 4.1 Generating my array
class Employee {
    constructor(id) {
        this.role = `Employee ${id}`;
        this.performance = Math.round(Math.random() * 100) / 100;
        this.salary = Math.floor(Math.random() * (4000 - 1250) + 1250);
    }
}

const myArray = [];

for(i = 0; i < 100; i++) {
    let employee = new Employee(i+1);
    myArray.push(employee);
}

console.log(myArray);

// 4.2 Sorting by performance
/* let myArraySortedByPerformance = myArray.sort(function (a,b) {
    return a.performance - b.performance;
});
console.log(myArraySortedByPerformance); */

// 4.3 Sorting by salary
/* let myArraySortedBySalary = myArray.sort((a,b) => a.salary - b.salary);
console.log(myArraySortedBySalary); */

// 4.4 Sorting by employee number
let myArraySortedByEmployeeNumber = myArray.sort(compareNumbers);

function compareNumbers(a, b) {
    return b - a;
}
console.log(myArraySortedByEmployeeNumber);

// 4.5 Filtering only those employees whose salary exceeds 2500 euros
const over2k500 = myArray.filter(employee => employee.salary > 2500);
console.log(over2k500);

// 4.6 Increasing salaries under 1500 euros by 25%
const increasedSalaries = myArray.map(employee => {
    if(employee.salary < 2500) {
        employee.salary *= 1.25;
    }
    return employee;
});
console.log(increasedSalaries);

const newOver2k500 = myArray.filter(employee => employee.salary > 2500);
console.log(newOver2k500);

// 4.7 Calculating employees cost for the company using reduce()

// const salaries = myArray.map(employee => {    
//     return employee.salary;
// });
// console.log(salaries);

const totalSalaries = myArray.reduce((sum, employee) => sum + employee.salary, 0);

const totalCostOfEmployees = totalSalaries * 1.15;

console.log(totalCostOfEmployees);

// 4.8 Choose de appropriate method (reduce / map / filter / sort)
// 4.8.1 Fire those employees whose performance is lower than 0.3.

const highPerformanceOnly = myArray.filter(employee => employee.performance >= 0.3);
console.log(highPerformanceOnly);

// 4.8.2 Calculate the average employee salary.
const averageSalary = totalSalaries / myArray.length;

console.log(averageSalary);

// 4.8.3 Increase the salary of those employees whose performance is higher than 0.7.

const reincreasedSalaries = myArray.map(employee => {
    employee.performance > 0.7 ? employee.salary *= 1.10 : employee.salary = employee.salary;
    return employee;
});
console.log(reincreasedSalaries);