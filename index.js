const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require('fs');
const jest = require('jest')

const promptManager = () => {
    return inquirer.prompt([{
            type: 'Input',
            name: 'Name',
            message: 'What is your name?(Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'Office Number',
            message: 'Please enter your office number(Required)',
            validate: officeNumber => {
                if (officeNumber) {
                    return true;
                } else {
                    console.log('Please enter your office number!');
                    return false;
                }
            }
        },
    ]).then(answers => {
        console.log(answers);
        const manager = new Manager(answers.name, answers.employeeId, answers.email, answers.officeNumber, employee.role)
        teamMembers.push(manager);
        groupMenu();
    });
};

const promptMenu = () => {
    return inquirer.prompt([{
            type: 'List',
            name: 'Menu',
            message: 'Please select which option you would like to continue with:',
            choices: ['Add an engineer', 'Add an intern', 'Finish building my team']
        }])
        .then(userChoice => {
            switch (userChoice.menu) {
                case "add an engineer":
                    promptEngineer();
                    break;
                case "add an intern":
                    promptEngineer();
                    break;
                default:
                    buildTeam();
            }
        });
};
const promptEngineer = () => {
    console.log(`
    ===============
    Add a New Engineer
    ===============
    `);

    return inquirer.prompt([{
            type: 'Input',
            name: 'Name',
            message: 'What is the name of engineer? (Required)',
            validate: engineerName => {
                if (engineerName) {
                    return true;
                } else {
                    console.log('Please enter the name of engineer!')
                    return false;
                }
            }
        },
        {
            type: 'Input',
            name: 'Github Username',
            message: 'Enter your Github username. (Required)',
            validate: githubUsername => {
                if (githubUsername) {
                    return true;
                } else {
                    console.log('Please enter your Github username!');
                    return false;
                }
            }
        },
    ]).then(answers => {
        console.log(answers);
        const Engineer = new Engineer(answers.name, answers.employeeId, answers.email, answers.githubUsername, answers.getRole)
        teamMembers.push(engineer);
        promptMenu();
    })
}
const promptIntern = () => {
    console.log(
        `
    =============
    Add a New Intern
    =============
     `
    );
    return inquirer.prompt([{
            type: 'input',
            name: 'name',
            message: 'What is the name of the intern? (Required)',
            validate: internName => {
                if (interName) {
                    return true;
                } else {
                    console.log('Please enter the name of the intern!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            validate: employeeId => {
                if (employeeId) {
                    return true;
                } else {
                    console.log('Please enter your employee ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address (Required)',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Please enter your email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'Enter your school name (Required)',
            validate: school => {
                if (school) {
                    return true;
                } else {
                    console.log('Please enter your school name!');
                    return false;
                }
            }
        },
    ]).then(answers => {
        console.log(answers);
        const intern = new Intern(answers.name, answers.employeeId, answers.email, answers.school);
        teamMembers.push(Intern);
        promptMenu();
    })
}