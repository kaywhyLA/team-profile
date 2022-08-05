const Manager = require('../lib/Manager');
const manager = new Manager('Josie', '10171738', 'jhouston@yahoo.com', '405', 'Manager');

test('create manager object', () => {

    expect(manager.name).toBe('Josie');
    expect(manager.id).toBe('10171738');
    expect(manager.email).toBe('jhouston@yahoo.com');
});

test('create officeNumber object', () => {
    expect(manager.officeNumber).toBe('405');
})

test('getName object', () => {
    expect(manager.getName()).toBe('Josie');
})

test('create getRole object', () => {
    expect(manager.getRole()).toBe('Manager');
});


module.exports = Manager;