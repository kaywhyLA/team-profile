const generateTeam = (team) => {
    console.log(team);
    //empty array to push HTML
    const generateManager = manager => {
        console.log(manager);
        let managerHtml =
            `
        <div class = "card" style = "width: 18rem;">
        <div class = "card-header">
        ${manager.name} <br/>
        <i class = "fas fa-mug-hot"></i>Manager</div>
        <ul class = "list-group list-group-flush">
        <li class = "list-group-item">ID: ${manager.id}</li>
        <li class = "list-group-item">Email: <span id = "email"><a href = "mailto: ${manager.email}">${manager.email}</a></span></li>
        <li class = "list-group-item">Office Number: ${manager.officeNumber}</li>
        </ul>
        </div>
        `;
        html.push(managerHtml);
    }

    const generateEngineer = engineer => {
        console.log(engineer);
        let engineerHtml = `
        <div class = "card" style = "width: 18rem;">
        <div class = "card-header">
        ${engineer.name} <br/>
        <i class = "fas fa-mug-hot"></i>Manager</div>
        <ul class = "list-group list-group-flush">
        <li class = "list-group-item">ID: ${engineer.id}</li>
        <li class = "list-group-item">Email: <span id = "email"><a href = "mailto: ${engineer.email}">${engineer.email}</a></span></li>
        <li class = "list-group-item">Github Username: <a target="_blank" href="https://github.com/${engineer.githubUsername}">${engineer.githubUsername}</a></li>
        </ul>
        </div>
        `
        html.push(engineerHtml);
    }
    const generateIntern = intern => {
        console.log(intern);
        let internHtml =
            `
        <div class = "card" style = "width: 18rem;">
        <div class = "card-header">
        ${intern.name} <br/>
        <i class = "fas fa-mug-hot"></i>Manager</div>
        <ul class = "list-group list-group-flush">
        <li class = "list-group-item">ID: ${intern.id}</li>
        <li class = "list-group-item">Email: <span id = "email"><a href = "mailto: ${intern.email}">${intern.email}</a></span></li>
        <li class = "list-group-item">School: ${intern.school}</li>
        </ul>
        </div>
        `;
        html.push(internHtml);
    }

    for (let i = 0; i < team.length; i++) {
        if (team[i].getRole() === "Manager") {
            generateManager(team[i]);
        }
        if (team[i].getRole() === "Engineer") {
            generateEngineer(team[i]);
        }
        if (team[i].getRole() === "Intern") {
            generateIntern(team[i]);
        }
        return html.join('');

    }

    module.exports = team => {
        `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Portfolio</title>
        <link rel="stylesheet" href="./dist/style.cs">
    </head>
    <body>
    <header>
    <h1> My Team </h1>
    <main> ${generateTeam(team)} </main>

    </body>
    </html>
    
    `;
    }
}