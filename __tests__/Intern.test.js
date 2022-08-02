const Intern = require('../lib/Intern');
const intern = new Intern('10171738', 'jhouston@yahoo.com', 'SMU');


test('create intern object', () => {
    expect(intern.id).toBe('10171738');
    expect(intern.email).toBe('jhouston@yahoo.com');
});

test('school object', () => {
    const intern = new Intern('');
    console.log(intern);
});