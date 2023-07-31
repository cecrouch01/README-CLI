// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer')
// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        message:"What is the title of this README?",
        name:"Title"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, JSON.stringify(data))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((response) => {
        writeToFile(process.argv[2], response)
    })
    .catch((error) => {
        console.log(`This is in Error: ${error}`)
    })
}

// Function call to initialize app
init();
