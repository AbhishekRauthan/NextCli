import inquirer = require('inquirer');
import questions = require('./questions')

inquirer
  .prompt(questions)
  .then(ans => {
    console.log({ans});
  })