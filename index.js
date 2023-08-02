const fs = require('fs');
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')
//This creates collects data needed for the CLI
const questions = [
    {
        type:'input',
        message:'What is the title of this README?',
        name:'title',
        default: '<Insert Title Here>',
    },
    {
        type: 'input',
        message: 'Write the description for this project.',
        name: 'description',
        default: '<Insert Description Here>',
    },
    {
        type: 'input',
        message: 'Write the installation instructions for this project.',
        name: 'installation',
        default: '<Insert Installation Instructions Here>',
    },
    {
        type: 'input',
        message: "Write the project's instructions/examples for use.",
        name: 'usage',
        default: '<Insert Usage Info Here>', 
    },
    {
        type: 'input',
        message: "Write the collaborators/third-party-assets/tutorials used the project.",
        name: 'credits',
        default: '<Insert Credits Here>',
    },
    {
        type: 'input',
        message: "Write the test instructions of the project.",
        name: 'tests',
        default: '<Insert Test Instructions Here>'
    },
    {
        type: 'list',
        messages: 'Select a license for your project',
        choices: ['No License', 'MIT', 'Apache 2.0', 'GPL v3.0', 'BSD 2-Clause', 'BSD 3-Clause', 'Boost 1.0', 'CC0', 'EPL 2.0', 'AGPL v3.0', 'GPL v2.0', 'LGPL v2.1', 'MPL 2.0', 'Unlicense', 'Beerware License'],
        name: 'license',
    },
    {
        type: 'input',
        messages: 'Enter your GitHub username',
        name: 'username',
        validate: function(answer) {
            if(answer.length < 1){
                console.error('Please input your GitHub username here')
            } else {
                return true
            }
        },
    },
    {
        type: 'input',
        message: 'Enter your email address',
        name: 'email',
        validate: function(answer) {
            if(answer.length < 1){
                console.error('Please input your email here')
            } else {
                return true
            }
        }
    },
];
//This creates the error message if there is something wrong in the questionaire.
function errorMessage(err) {
    console.log(err)
}
//This creates the README.md file. 
function writeToFile(data) {
       fs.writeFileSync('README.md', data)
}
//This is the function to use the user's inputed information
function renderREADMEInfo(userData) {
    return generateMarkdown(userData);
}

//This function runs the application
function init() {
    inquirer.prompt(questions)
    .then(renderREADMEInfo)
    .then(writeToFile)
    .catch(errorMessage)
}

// Function call to initialize app
init();
