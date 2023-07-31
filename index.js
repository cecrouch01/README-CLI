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
        writeToFile(process.argv[2], response)
    })
    .catch((error) => {
        errorMessage(error)
    })
}

// Function call to initialize app
init();
