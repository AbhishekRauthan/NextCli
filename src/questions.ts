import inquirer from "inquirer";

const questions: inquirer.QuestionCollection = [
  {
    type: "confirm",
    name: "type",
    message: "Do you wish to use typescript?",
    default: true,
  },
  {
    type: "confirm",
    name: "css_libraries",
    message: "Do you wish to use custom css libraries?",
    default: false,
  },
  {
    type: "confirm",
    name: "style_com",
    message: "Do you wish to use styled components?",
    default: false,
    when: (ans) => {
      return ans.css_libraries;
    },
  },
];

export default questions;
