const Employee = require('../lib/Employee');
const employee = new Employee('10171738', 'jhouston@yahoo.com', '405', 'Employee');


test('creates employee object', () => {
    expect(employee.id).toBe('10171738');
    expect(employee.email).toBe('jhouston@yahoo.com');
});

test('create employee id object', () => {
    const employee = new Employee('');

    expect(employee.id).toBe('10171738');
});

test('create employee email object', () => {
    const employee = new Employee('');

    expect(employee.email).toBe('jhouston@yahoo.com');
});

test('create office number object', () => {
    expect(employee.officeNumber).toBe('405');
});

test('create role object', () => {
    expect(employee.getRole).toBe('Employee');
});


module.exports = Employee;