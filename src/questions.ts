import inquirer = require("inquirer");

const questions: inquirer.QuestionCollection = [
  {
    type: "confirm",
    name: "type",
    message: "Do you wish to use typescript?",
    default: true,
  },
  {
    type: "confirm",
    name: "type",
    message: "Do you wish to use styled components?",
    default: false,
  }
];

module.exports = questions;
