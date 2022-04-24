// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer')
const generatePage = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const promptUser = () =>{
    // validate answers!!!!!!!!!!!!!!!!!!!!
    return inquirer.prompt([
        {
            type: 'input',
            name: 'projectTitle',
            message: 'Please enter the name of your project (Required)',
            validate: nameInput =>
            {
                if (nameInput)
                {
                    return true;
                } else
                {
                    console.log('Please enter your project name');
                    return false;
                }
            }
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
            type: 'comfirm',
            name: 'confirmTests',
            message: 'are there any test with this project',
            default: false
        },
        {
            type: 'input',
            name: 'test',
            message: 'please provide test links',
            when: ({ confirmTests }) =>
            {
                if (confirmTests)
                {
                    return true
                }
                else
                {
                    return false
                }
                }
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
const writeFile = data =>
{
    fs.writeFile('README.md', data, err =>
        {
            if (err)
            {
                console.log(err);
                return
            }
            else
            {
                console.log('Your Readme file has been created')
            }
        })
    }
    
    // TODO: Create a function to initialize app
    function init() {}
    
    // Function call to initialize app
    init();
    // promptUser()
promptUser()
    .then(answers =>
    {
        return generatePage(answers)
    })
    .then(data =>
    {
        return writeFile(data)
    })
    .then(answers => console.log(answers))