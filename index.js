// Included packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// Created an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "Enter the name of your project.",
  },
  {
    type: "input",
    name: "description",
    message: "Please describe the purpose and functionality of this project.",
  },
  {
    type: "input",
    name: "installation",
    message: "What are the steps required to install and if any what dependencies.",
  },
  {
    type: "input",
    name: "usage",
    message:
    "Provide instructions and/or examples for use of this project.",
  },
  {
    type: "checkbox",
    name: "license",
    message: "Please select a license applicable to this project.",
    choices: ["APACHE2.0", "BSD2", "BSD3", "BOOST1.0", "MIT", "MPL2.0", "none"],
  },
  {
    type: "input",
    name: "contributors",
    message: "Enter any guidelines on how users can further contribute to your repository.",
    default: "",
  },
  {
    type: "input",
    name: "test",
    message: "Provide walkthrough of required tests if applicable.",
  },
  {
    type: "input",
    name: "github",
    message: "Write your GitHub username.",
  },
  {
    type: "input",
    name: "email",
    message: "Provide a valid email address.",
  },
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// Function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {

    });
  }

// Function call to initialize app
init();
