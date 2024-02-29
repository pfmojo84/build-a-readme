// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');


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
      name: "depend",
      message: "Please note any dependencies here:"
    },
    {
      type: "input",
      name: "test",
      message: "Please include any required testing here:"
    },
    {
      type: "checkbox",
      name: "license",
      message: "Please select the license used for this project (if applicable):",
      choices: ["MIT", "APACHE", "Boost", "GNU", "Mozilla"],
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

// TODO: Create a function to initialize app
function init() {}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// Function call to initialize app
init();
