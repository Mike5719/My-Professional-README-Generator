//packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

//array of questions prompting user for input
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
      name: 'installation',
    },
    { type: 'input',
      message: 'How is your project used?',
      name: 'usage',
    },
    { type: 'input',
      message: 'What are the guidelines for contribution?',
      name: 'contributing',
    },
    { type: 'list',
      name: 'license',
      message: 'Which license would you like to use?',
      choices: ['Apache License 2.0','GNU General Public License','MIT License', 'None'],
    },  
    { type: 'input',
      message: 'How can your project be tested?',
      name: 'tests',
    },
    { type: 'input',
      message: 'What is your GitHub username?',
      name: 'github',  
    },
    { type: 'input',
      message: 'What is your email address?',
      name: 'email',
    },

  ];

  //function to write README file
  function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        }
        console.log("You're Professional README file is ready to view!");
    });
  };

  //function to initialize app
  function init() {
    inquirer.prompt(questions)
    .then(function(userInput) {
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput));
    });
  };

  //function call to initialize app
  init();