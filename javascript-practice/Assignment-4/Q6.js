
class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }

    getAnnualSalary() {
        return this.salary * 12;
    }

    applyBonus(percent) {
        let annualSalary = this.getAnnualSalary();
        let bonus = annualSalary * percent / 100;

        return annualSalary + bonus;
    }
}

const employees = [
    new Employee(1, "Rahul", "IT", 30000),
    new Employee(2, "Aman", "HR", 25000),
    new Employee(3, "Priya", "Finance", 35000),
    new Employee(4, "Neha", "IT", 40000),
    new Employee(5, "Rohit", "Sales", 28000)
];

for (let employee of employees) {
    console.log("Employee:", employee.name);
    console.log("Department:", employee.department);
    console.log("Annual Salary:", employee.getAnnualSalary());
    console.log("Salary with 10% Bonus:", employee.applyBonus(10));
    console.log("-------------------------");
}

let totalPayout = employees.reduce(function(total, employee) {
    return total + employee.applyBonus(10);
}, 0);

console.log("Total Annual Payout:", totalPayout);
