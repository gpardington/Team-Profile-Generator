const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
const team = [];

//Questions user will answer for each employee type
const employeeQuestions = [
    {
        type: "list",
        name: "role",
        message: "Add a new employee by selecting the employee's role:",
        choices: ["Manager", "Engineer", "Intern"]
    },
    {
        type: "input",
        name: "name",
        message: "What is the employee's name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is their employee ID number?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the employee's email address?"
    }
]
//Different questions for each different role
//Question for manager role
const managerQuestions = () => {
    return inquirer.prompt ([
        {
        type: "input",
        name: "officeNumber",
        message: "What is the Manager's office number?"
        }
    ])
}
//Question for Engineer role
const engineerQuestions = () => {
    return inquirer.prompt ([
        {
         type: "input",
         name: "githubUserName",
         message: "What is the Engineer's GitHub username?"   
        }
    ])
}
//Question for Intern role
const internQuestions = () => {
    return inquirer.prompt ([
        {
        type: "input",
        name: "school",
        message: "What school did the Intern attend?"
        }
    ])
}

const createEmployee = async () => {
    await inquirer.prompt(employeeQuestions).then((response) => {
        let role = response.role;
        let name = response.name;
        let id = response.id;
        let email = response.email;
        let github = "";
        let officeNumber = "";
        let school = "";
        
        if (role === "Manager") {
            managerQuestions().then((response) => {
                officeNumber = response.officeNumber;
                let Employee = new Manager(name, id, email, officeNumber);
                team.push(Employee);
                addEmployee();
            })
        }else if (role === "Engineer") {
            engineerQuestions().then((response) => {
                github = response.githubUserName;
                let Employee = new Engineer(name, id, email, github);
                team.push(Employee);
                addEmployee();
            })
        }else if (role === "Intern") {
            internQuestions().then((response) => {
                school = response.school;
                let Employee = new Intern(name, id, email, school);
                team.push(Employee);
                addEmployee();
            })
        }
    })
}
//Continue adding employee or select complete
const addEmployee = async () => {
    await inquirer.prompt ([
        {
        type: "list",
        name: "addEmployee",
        message: "Do you have another employee to add to the team?",
        choices: ["Yes", "No, I am finished adding employees."]
        }
    ]).then(async (response) => {
        if (response.addEmployee === "Yes") {
            createEmployee();
        }else if (response.addEmployee === "No, I am finished adding employees."){
            createTeam();
        }
    })
}
//Creates the team by making a directory which then is sent to team.html
const createTeam = () => {
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR);
    }
    fs.writeFileSync(outputPath, render(team), "utf-8");
};

createEmployee();