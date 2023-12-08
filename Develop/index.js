//node modules
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

const questions = [
    {
      type: 'input',
      message: 'What is your project title?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Provide a short description explaining the what, why, and how of your project.',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What are the steps required to install your project?',
      name: 'Installation',
    },
    { type: 'input',
      message: 'How is your project used?',
      name: 'Usage',
    },
    { type: 'input',
      message: 'What are the guidelines for contribution?',
      name: 'Contributing',
    },
    { type: 'checkbox',
      name: 'license',
      message: 'Which license would you like to use?',
      choices: ['Apache License 2.0','GNU General Public License','MIT License','Mozilla Public License 2.0','The Unlicense'],
    },  
    { type: 'input',
      message: 'How can your project be tested?',
      name: 'Tests',
    },
    { type: 'input',
      message: 'What is your GitHub username?',
      name: 'Github',  
    },
    { type: 'input',
      message: 'What is your email address?',
      name: 'email',
    },

  ];

  function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        }
        console.log("You're Professional README file is ready to view!");
    });
  };

  function init() {
    inquirer.prompt(questions)
    .then(function(userInput) {
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput));
    });
  };

  init();




// // TODO: Include packages needed for this application

// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
