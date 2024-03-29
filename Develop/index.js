// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const questions = [
    {
      type: "input",
      name: "title",
      message: "Enter Project Name:"
    },
    {
      type: "input",
      name: "description",
      message: "Include a brief description of your project here:"
    },
    {
      type: "input",
      name: "installation",
      message: "Add installation instructions here:"
    },
    {
      type: "input",
      name: "usage",
      message: "Include operational instructions here:"
    },
    {
      type: "input",
      name: "features",
      message: "Please note any special features here:"
    },
    {
      type: "input",
      name: "technologies",
      message: "Include any technologies used here:"
    },
    {
      type: "input",
      name: "dependencies",
      message: "Please note any dependencies here:"
    },
    {
      type: "input",
      name: "testing",
      message: "Please include any required testing here:"
    },
    {
      type: "list",
      name: "license",
      message: "Please select the license used for this project (if applicable):",
      choices: ["MIT", "APACHE", "Boost", "GNU", "Mozilla", "None"],
    },
    {
      type: "input",
      name: "author",
      message: "Enter your name here:"
    },
    {
      type: "input",
      name: "email",
      message: "Enter email address here:"
    },
    {
      type: "input",
      name: "github",
      message: "Enter GitHub user name here:"
    },
    {
      type: "input",
      name: "collab",
      message: "Enter include any collaborators here:"
    },
    {
      type: "input",
      name: "gitlink",
      message: "Enter link to GitHub repository here:"
    },
    {
      type: "input",
      name: "deployed",
      message: "Enter link to deployed site (if applicable) here:"
    },
];


//writeToFile function takes in two parameters (fileName, data)
function writeToFile(fileName, data) { 
  return fs.writeFileSync(path.join(process.cwd(), fileName),data); // synchronously write data to file. 'path.join...' creates the absolute path of the file by joining the current working directory with the 'fileName"
}

//init function. 'createPromptModule' prompt module for set of questions
function init() {
  inquirer.prompt(questions).then((responses) =>{ //then() method to add user input to generateMarkdown function -- ensurs code will only run after user has input responses
    writeToFile("./dist/README.md", generateMarkdown({...responses}));//... use spread operator to copy responses to markdown file
  })
}
//Function call to initialize app
init();

