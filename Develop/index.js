// TODO: Include packages needed for this application
const fs = require('fs');
const { measureMemory } = require('vm');
const inquirer = ('inquirer')

// TODO: Create an array of questions for user input
function promptUser ()
{
    // validate answers!!!!!!!!!!!!!!!!!!!!
    return inquirer.prompt([
        {
            type: 'input',
            name: 'projectTitle',
            message: 'Please enter the name of your project'
        },
        {
            type: 'input',
            name: 'decription',
            message: 'write a decription of your project'
        },
        {
            type: 'input',
            name: 'installationUsed',
            message: 'what was the installation process'
        },
        {
            type: 'input',
            name: 'use',
            message: 'what is the project used for'
        },
        {
            type: 'list',
            name: 'license',
            message: 'please choose the license used for the project',
            choices: [
                'ISC',
                'MIT',
                'Open'
            ]
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'please list the contributors on this project'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'are there any test with this project'
        },
        {
            type: 'input',
            name: 'questions',
            message: 'how do i submit a question'
        },
        {
            type: 'input',
            name: 'github',
            message: 'what is your gitHub username'
        },
        {
            type: 'input',
            name: 'email',
            message: 'what is your email address'
        }
    ])

}
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
