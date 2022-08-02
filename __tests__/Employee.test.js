const Employee = require('../lib/Employee');
const Employee = new Employee('Khaylla', '10171738', 'khayllahouston@yahoo.com');


test('creates employee object', () => {
    expect(Employee.name).toBe('');
    expect(Employee.id).toBe('');
    expect(Employee.email).toBe('');


});

module.exports = Employee;