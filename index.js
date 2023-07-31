// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer')
const questions = [
    {
        input: 'input',
        message: 'What is the path of this README? (Leave blank if it should be in the current directory)',
        name: 'path',
        validate: function(answer) {
            if(answer.indexOf(' ') !== -1) {
                console.log('Do not use spaces in this response');
            } else {
                return true;
            }
        }
    },
    {
        type:'input',
        message:'What is the title of this README?',
        name:'title',
        default: "'<Insert Title Here>'"
    },
    {
        type: 'input',
        message: 'Write the description for this project.',
        name: 'description',
        default: "'<Insert Description Here>'",
    },
    {
        type: 'input',
        message: 'Write the installation instructions for this project.',
        name: 'installation',
        default: "'<Insert Installation Instructions Here>'"
    },
    {
        type: 'input',
        message: "Write the project's instructions/examples for use.",
        name: 'usage',
        default: "'<Insert Usage Info Here>'" 
    },
    {
        type: 'input',
        message: "Write the collaborators/third-party-assets/tutorials used the project.",
        name: 'credits',
        default: "'<Insert Credits Here>'",
    },
    {
        type: 'input',
        message: "Write the test instructions of the project.",
        name: 'tests',
        default: "'<Insert Test Instructions Here>'"
    },
    {
        type: 'list',
        messages: 'Select a license for your project',
        choices: ['MIT License', 'Apache License 2.0', 'GNU General Public License v3.0', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense', 'Beerware License'],
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
    if(err == 'TypeError [ERR_INVALID_ARG_TYPE]: The "path" argument must be of type string or an instance of Buffer or URL. Received undefined'){
        console.log('Write README.md to create README in current directory or <path>/README.md for a different directory')
    } else {
        console.log(`This is in Error: ${err}`)
    }
}
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, JSON.stringify(data))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((response) => {
        writeToFile(`${response.path}README.md`, response)
    })
    .catch((error) => {
        errorMessage(error)
    })
}

// Function call to initialize app
init();
