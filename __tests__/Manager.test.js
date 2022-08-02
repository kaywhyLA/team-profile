const Manager = require('../lib/Manager');
const manager = new Manager('10171738', 'jhouston@yahoo.com');

test('create manager object', () => {
    const manager = new Manager('');

    expect(manager.id).toBe('10171738');
    expect(manager.email).toBe('jhouston@yahoo.com');
});

test('create getRole object', () => {
    expect(manager.getRole()).toBe('Manager');
});


module.exports = Manager;