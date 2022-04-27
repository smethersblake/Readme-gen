// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer')
const generatePage = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const promptUser = () =>{
    // asks questions to generat the README.md
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
            message: 'Write a decription of your project'
        },
        {
            type: 'input',
            name: 'installationUsed',
            message: 'What was the installation process'
        },
        {
            type: 'input',
            name: 'use',
            message: 'What is the project used for'
        },
        {
            type: 'confirm',
            name: 'licenceConfirm',
            message: 'Did you use a license?',
            default: false
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please choose the license used for the project',
            choices: [
                'ISC',
                'MIT',
                'Open'
            ],
            when: ({ licenceConfirm }) =>
            {
                if (licenceConfirm)
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
            name: 'contributors',
            message: 'Please list the contributors on this project'
        },
        {
            type: 'confirm',
            name: 'testConfirm',
            message: 'Are there any test with this project',
            default: false
        },
        {
            type: 'input',
            name: 'test',
            message: 'Please provide test links',
            when: ({ testConfirm }) =>
            {
                if (testConfirm)
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
            message: 'How do I get a hold of you for any questions?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your gitHub username'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address'
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
function init ()
{
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
    }
    
    // Function call to initialize app
    init();

