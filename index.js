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
const teamMember =[]
//function menuApp() {



//function createTeam(){
//created question to create and select team memebers
const createTeam = () => {
        //const answer =  
        inquirer
                .prompt([

                        // {
                        //         type: "input",
                        //         message: "What is your name?",
                        //         name: "your name"
                        // },
                        // {
                        //         type: "input",
                        //         message: "what is your id number?",
                        //         name: "id number"
                        // },
                        // {
                        //         type: "input",
                        //         message: "what is your email?",
                        //         name: "email"
                        // },
                        {
                                type: "list",
                                message: "what is your role",
                                name: "role",
                                choices: ["Manager", "Engineer", "Intern"]
                        }


                ])

                .then((answers) => {
                        // Use user feedback for... whatever!!
                        console.log (answers)
                        if(answers.role === "Manager"){
                                createManager()
                        }
                        else if (answers.role == "Engineer"){
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

        //make prompter that asks which team member you want to add
        //depending on the answer you will either run
        //create Engineer or add intern
        //console.log("build your team")
        // inquirer
        // .prompt([{
        //         type: "input",
        //         name: "team memeber",
        //         message: " select team memeber?",
        // validate: (answer) => {
        //         if (answer !== "") {
        //                 return true;
        //         }
        //         return "engineer"

        // type:"input"
        // name:"select"

}

//}

//if you dont want to add anything else you will then run
//buildTeam











function buildTeam() {

        // if (fs.existsSync(DIST_DIR)) {
        //         fs.mkdirSync(DIST_DIR);
        // }
        const distPath = "./dist/team.html"
        fs.writeFileSync(distPath, render(teamMember), "uutf-8");


}

function render (team){
        console.log (team)
        const cards =[]
        team.map(employee =>{
                console.log(employee)
                if (employee.getRole()== "Manager"){
                        return
                }
        })
        //map the employees to different arrays depending on their role

        //after the mapping insert the employees in each different type of card


        

        

        //cards.push() the array of cards with interns, then do the same for cards of engineers and managers

        //make the cards array into a string .join()


        return `
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <main class="container">
<section class="row">
    ${cards}
</section>

    </main>
<script src="index.js"></script>
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
                        const engineer = new engineer(
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









//Team profile
//const team 

// const addManager = () => {
//         return inquirer.prompt([{

//                 type: "input",
//                 name: "manager name",
//                 message: "what is managers name "
//         },

//         {
//                 type: "type",
//                 name: "ID number",
//                 message: "what is managers employee ID number"

//         },
//         {

//                 type: "imput",
//                 name: "email",
//                 message: "what is managers email?"
//         },
//         {
//                 type: "input",
//                 name: "office number",
//                 message: "what is managers office number"
//         }





//         ])
// }
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
                        if(answers.addmemeber== "Add a new memeber to team"){
                                createTeam()
                        }

                        else{
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





//then(response)

//promptQuestion();

// function createTeam() {
//         console.log("new member", teamMember)
//         fs.writeFileSync("./dist/team.html", generateTeam(teamMember))
// }
createTeam()
