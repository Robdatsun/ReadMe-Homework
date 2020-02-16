const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

let data = {};

const questions = [
        {
            type: "input",
            name: "username",
            message: "Enter your GitHub Username"
        },
        {
            type: "input",
            name: "project",
            message: "What is the name of your project?"
        },
        {
            type: "input",
            name: "description",
            message: "Give a short description of your project"
        },
        {
            type: "confrim",
            name: "table",
            message: "Do you want to have a table of contents?"
        },
        {
            type: "input",
            name: "installation",
            message: "What command should be run to install dependencies?"
        },
        {
            type: "input",
            name: "tests",
            message: "What command should be run to run tests?"
        },
        {
            type: "input",
            name: "usage",
            message: "What will this be used for?"
        },
        {
            type: "list",
            name: "license",
            message: "What license are you using?",
            choices: ["MIT", "APACHE 3.0", "none"]
        },
        {
            type: "input",
            name: "contributing",
            message: "Who is contributing to this project?"
        }];
function writeFile(fileName,data){
    return fs.writeFile("ReadMe.txt", fileName, data, function(err){
            if (err){
                return console.log(err)
            }
    })
    }
writeFile();

    
 


function init() {
    inquirer
        .prompt(questions)
        .then(function ({ username }){
            const queryUrl = `https://api.github.com/users/${username}`;
        
            axios
                .get(queryUrl)
                .then((response) => {
                    console.log(response.data)
                })
        
        })
}

init();
