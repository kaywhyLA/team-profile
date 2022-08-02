const Employee = require('../lib/Employee');
const employee = new Employee('10171738', 'jhouston@yahoo.com');


test('creates employee object', () => {
    expect(employee.id).toBe('10171738');
    expect(employee.email).toBe('jhouston@yahoo.com');
});

test('create employee id?', () => {
    const employee = new Employee('');

    expect(employee.id).toBe('10171738');
})

test('create employee email?', () => {
    const employee = new Employee('');

    expect(employee.email).toBe('jhouston@yahoo.com');
})


module.exports = Employee;