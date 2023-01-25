const inquirer = require("inquirer");
const fs = require("fs")

//Team Profile 

const Employee = require("./lib/Employee")
const Manager = require ("./lib/Manager")
const Intern = require ("./lib/Intern")
const Engineer = require ("./lib/Engineer");
const { type } = require("os");
const { validate } = require("@babel/types");
const { isTypedArray } = require("util/types");

function menuApp(){



function createTeam(){
        //make prompter that asks which team member you want to add
        //depending on the answer you will either run
        //create Engineer or add intern
console.log("build your team")
inquirer
.prompt([{
        type: "input",
        name: "team memeber",
        message: " select team memeber?",
validate: (answer) => {
        if (answer !== "") {
                return true;
        }
        return "engineer"

type:"input"
name:"select"

},

 },

        //if you dont want to add anything else you will then run
        //buildTeam
}
        



       

       



function buildTeam(){

        if (fs.existsSync(DIST_DIR)) {
                fs.mkdirSync(DIST_DIR);
        }
        fs.writeFileSync(distPath, render(teamMember), "uutf-8");


}

function createManager () {
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
                {
                        type: "input",
                        name: "managerEmail",
                        message: "what is  Manager's email ",
                        validate: (answer) => {
                                const pass = answer.match(/\S+@\.\S+/);
                                if (pass) {
                                        return true;
                                }
                                return "Please enter a vail email address"
                        },
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
idArray.push(answer.managerId);
createTeam();
        

});
}

function createEngineer () {
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
                {
                        type: "input",
                        name: "engineerEmail",
                        message: "what is  engineer's email ",
                        validate: (answer) => {
                                const pass = answer.match(/\S+@\.\S+/);
                                if (pass) {
                                        return true;
                                }
                                return "Please enter a vail email address"
                        },
                 },
                 {
                        type: "input",
                        name: "engineerGitGub",
                        message: "please punch in engineer's GitGub ",
                        validate: (answer) => {
                                const pass = answer.match(/^[1-9]\d*$/);
                                if (pass) {
                                        return true;
                                }
                                return "Please enter a vaild gitgub"
                        },
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
idArray.push(answer.engineerId);
createTeam();
        

});
}

function addIntern () {
        console.log("add Intern ");
        inquirer
        .prompt([{
                type: "input",
                name: "internName",
                message: " provide Intern's name?",
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
                {
                        type: "input",
                        name: "internEmail",
                        message: "what is  intern's email ",
                        validate: (answer) => {
                                const pass = answer.match(/\S+@\.\S+/);
                                if (pass) {
                                        return true;
                                }
                                return "Please enter a vail email address"
                        },
                 },
                 {
                        type: "input",
                        name: "school name",
                        message: "waht is the name of the school",
                        validate: (answer) => {
                                const pass = answer.match(/^[1-9]\d*$/);
                                if (pass) {
                                        return true;
                                }
                                return "Please enter a vaild school"
                        },
                 },
         
        ])
.then((answer) => {
        const intern = new intern(
                answer.internName,
                answer.internId,
                answer.internEmail,
                answer.schoolName
);
teamMember.push(intern);
idArray.push(answer.internId);
createTeam();
        

});
}









//Team profile
const team 

const addManager = ()=>{
    return inquirer.prompt([{
        
        type:"input",
        name:"manager name",
        message:"what is managers name "
}

{
            type :"type",
            name:"ID number",
            message:"what is managers employee ID number"

}
{

        type:"imput",
        name:"email",
        message:"what is managers email?"
}
{
        type:"input",
        name:"office number",
        message:"what is managers office number"
}





])
.then(response)


