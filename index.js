// TODO: Include packages needed for this application
import inquirer from "inquirer" 
import fs from 'fs';
import generateMarkdown from "./utils/generateMarkdown.js"
// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        message:"Enter Project Title:",
        name:"title"
    },
    {
        type:"input",
        message:"Enter Project Installation instruction:",
        name:"instruction"
    },
    {
        type:"input",
        message:"Enter Project Usage information:",
        name:"information"
    },
    {
        type:"input",
        message:"Enter Project Contribution Guidelines:",
        name:"contribution"
    },
    {
        type:"input",
        message:"Enter Project Test :",
        name:"test"
    },
   
    {
        type:"list",
        message:"Enter Project License :",
        name:"license", 
        choices: ["MIT","Apache","BSD","none"]
    },
    {
        type:"input",
        message:"Enter Email:",
        name:"email"
    },
    {
        type:"input",
        message:"Description:",
        name:"description"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
          err ? console.error(err) : console.log('Success!')
        ); 
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((response) =>{ 
        let markdownTemplate = generateMarkdown(response)
        writeToFile("readmefile.md", markdownTemplate)
    }
    );
}

// Function call to initialize app
init();
