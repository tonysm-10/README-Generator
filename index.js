// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your Project Name?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Give me a brief description of you Project'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide me clear instructions on how to install your Project'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Instructions on how someone would use your Project?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose the license for your Project:',
        choices: ['Mit', 'none']
    },
    {
        type: 'input', 
        name: 'contributing',
        message: 'Who contributed to your project?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are the test instructions for your Project?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter github Username:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter the email where people can contact you:'
    }
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Successfully made README file!');
        }
    });
}
   

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        writeToFile('README.md', generateMarkdown(answers));
    })
    .catch((err) => {
        console.log(err);
    });
}

// Function call to initialize app
init();
