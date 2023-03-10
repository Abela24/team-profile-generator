const inquirer = require("inquirer");
const fs = require("fs")
//Team Profile 
const Employee = require("./lib/Employee")
const Manager = require("./lib/Manager")
const Intern = require("./lib/Intern")
const Engineer = require("./lib/Engineer");
const { type } = require("os");
const { validate } = require("@babel/types");
const { isTypedArray } = require("util/types");
const teamMember = []
//function menuApp() {
//function createTeam(){
//created question to create and select team memebers
const createTeam = () => {

        inquirer
                .prompt([

                        {
                                type: "list",
                                message: "what is your role",
                                name: "role",
                                choices: ["Manager", "Engineer", "Intern"]
                        }


                ])

                .then((answers) => {
                        // Use user feedback for... whatever!!
                        console.log(answers)
                        if (answers.role === "Manager") {
                                createManager()
                        }
                        else if (answers.role == "Engineer") {
                                createEngineer()
                        }

                        else {
                                addIntern()
                        }

                })
                .catch((error) => {
                        if (error.isTtyError) {
                                // Prompt couldn't be rendered in the current environment
                        } else {
                                // Something else went wrong
                        }
                });
}

function buildTeam() {

        
        const distPath = "./dist/teaml.html"
        fs.writeFileSync(distPath, render(teamMember), "utf-8");


}
//rendering team function
function render(team) {
        console.log('this is the team', team)

        //creating cards for each employees
        const cards = team.map(employee => {
                console.log(employee)
                if (employee.getRole() == "Manager") {
                        //returns data on cards
                        return `
                                        <div class="Manager cards">
                        <h1>Manager</h1>
                        <div class="name">Name:${employee.getName()}</div>
                        <div class="id"> ID:${employee.getId()}</div>
                        <div class="email">Email: ${employee.getEmail()}</div>
                        <div class="officeNumber">Office Number:${employee.getOfficeNumber()}</div>
                    </div>`
                }


                else if (employee.getRole() == 'Engineer') {

                        return `
                                        <div class="Engineer cards">
                        <h1>Engineer</h1>
                        <div class="name">Name: ${employee.getName()}</div>
                        <div class="id">ID: ${employee.getId()}</div>
                        <div class="email">Email: ${employee.getEmail()}</div>
                        <div class="github">Github: ${employee.getGithub()}</div>
                    </div>
                                        `
                }

                else if (employee.getRole() == "Intern") {

                        return `
                                                <div class="Intern cards">
                                <h1>Intern</h1>
                                <div class="name">Name: ${employee.getName()}</div>
                                <div class="id"> ID: ${employee.getId()}</div>
                                <div class="email">Email: ${employee.getEmail()}</div>
                                <div class="github">${employee.getSchool()}</div>
                            </div>
                                                `
                }

        }
        )


        const cardString = cards.join()

        console.log(cardString)


        //returning data into html page
        return `
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
</head>

<body>
<div class="title">
        <h1>Team Profile</h1>
    </div>

<section class="row">
    ${cardString}
</section>

    </main>
<script src="index.js"></script>
<link rel ="stylesheet" href="style.css">
</body>

</html>
        
        
        `
}
// if manager is added to team , answer these questons
function createManager() {
        console.log("Build your team ");
        inquirer
                .prompt([{
                        type: "input",
                        name: "managerName",
                        message: " provide Team manager's name?",
                        validate: (answer) => {
                                if (answer !== "") {
                                        return true;
                                }
                                return "please provoide  at least  one character"
                        },

                },

                {
                        type: "input",
                        name: "managerId",
                        message: "please punch in Manager's id ",
                        validate: (answer) => {
                                const pass = answer.match(/^[1-9]\d*$/);
                                if (pass) {
                                        return true;
                                }
                                return "Please enter a positive number greaater than 0"
                        },
                },

                {

                        type: "input",
                        name: "managerEmail",
                        message: "what is  Manager's email ",
                        // validate: (answer) => {
                        //         const pass = answer.match(/\S+@\.\S+/);
                        //         if (pass) {
                        //                 return true;
                        //         }
                        //         return "Please enter a vail email address"
                        // },
                },
                {
                        type: "input",
                        name: "managerOfficeNumber",
                        message: "please punch in Manager's Office number ",
                        validate: (answer) => {
                                const pass = answer.match(/^[1-9]\d*$/);
                                if (pass) {
                                        return true;
                                }
                                return "Please enter a positive number greaater than 0"
                        },
                },

                ])
                .then((answer) => {
                        const manager = new Manager(
                                answer.managerName,
                                answer.managerId,
                                answer.managerEmail,
                                answer.managerOfficeNumber
                        );
                        teamMember.push(manager);
                        //idArray.push(answer.managerId);
                        addNewMember();


                });
}
//if Engineer is selected and added to team answer these questions
function createEngineer() {
        console.log("create  engineer ");
        inquirer
                .prompt([{
                        type: "input",
                        name: "engineerName",
                        message: " provide engineer's name?",
                        validate: (answer) => {
                                if (answer !== "") {
                                        return true;
                                }
                                return "please provoide  at least  one character"
                        },

                },

                {
                        type: "input",
                        name: "engineerId",
                        message: "please punch in engineer's id ",
                        validate: (answer) => {
                                const pass = answer.match(/^[1-9]\d*$/);
                                if (pass) {
                                        return true;
                                }
                                return "Please enter a positive number greaater than 0"
                        },
                },

                {

                        type: "input",
                        name: "engineerEmail",
                        message: "what is  engineer's email ",
                        // validate: (answer) => {
                        //         const pass = answer.match(/\S+@\.\S+/);
                        //         if (pass) {
                        //                 return true;
                        //         }
                        //         return "Please enter a vail email address"
                        // },
                },
                {
                        type: "input",
                        name: "engineerGitGub",
                        message: "please punch in engineer's GitGub ",
                        // validate: (answer) => {
                        //         const pass = answer.match(/^[1-9]\d*$/);
                        //         if (pass) {
                        //                 return true;
                        //         }
                        //         return "Please enter a vaild gitgub"
                        // },
                },

                ])
                .then((answer) => {
                        const engineer = new Engineer(
                                answer.engineerName,
                                answer.engineerId,
                                answer.engineerEmail,
                                answer.engineerGitGub
                        );
                        teamMember.push(engineer);
                        //idArray.push(answer.engineerId);
                        addNewMember();


                });
}

// If Intern is selected , answser these questons 
function addIntern() {
        console.log("add Intern ");
        inquirer
                .prompt([{
                        type: "input",
                        name: "internName",
                        message: "what is your name?",
                        validate: (answer) => {
                                if (answer !== "") {
                                        return true;
                                }
                                return "please provoide  at least  one character"
                        },

                },

                {
                        type: "input",
                        name: "internId",
                        message: "please punch in intern's id ",
                        validate: (answer) => {
                                const pass = answer.match(/^[1-9]\d*$/);
                                if (pass) {
                                        return true;
                                }
                                return "Please enter a positive number greaater than 0"
                        },
                },

                {

                        type: "input",
                        name: "internEmail",
                        message: "what is  intern's email ",
                        // validate: (answer) => {
                        //         const pass = answer.match(/\S+@\.\S+/);
                        //         if (pass) {
                        //                 return true;
                        //         }
                        //         return "Please enter a vail email address"
                        // },
                },
                {
                        type: "input",
                        name: "schoolName",
                        message: "waht is the name of the school",
                        // validate: (answer) => {
                        //         const pass = answer.match(/^[1-9]\d*$/);
                        //         if (pass) {
                        //                 return true;
                        //         }
                        //         return "Please enter a vaild school"
                        // },
                },

                ])
                .then((answer) => {
                        const intern = new Intern(
                                answer.internName,
                                answer.internId,
                                answer.internEmail,
                                answer.schoolName
                        );
                        teamMember.push(intern);
                        //idArray.push(answer.internId);
                        addNewMember();


                });
}





const addNewMember = function () {

        inquirer
                .prompt([
                        {
                                name: "addmemeber",
                                type: "list",
                                message: "what would you like to do next?",
                                choices: ["Add a new memeber to team", "build team"]
                        }
                ])
                .then((answers) => {
                        // Use user feedback for... whatever!!
                        console.log(answers)
                        if (answers.addmemeber == "Add a new memeber to team") {
                                createTeam()
                        }

                        else {
                                buildTeam()

                        }

                })
                .catch((error) => {
                        if (error.isTtyError) {
                                // Prompt couldn't be rendered in the current environment
                        } else {
                                // Something else went wrong
                        }
                });

        if (addNewMember == 'add a new memeber') {
                return promptQuestion()
                {
                        return createTeam
                }
        }
}






createTeam()



