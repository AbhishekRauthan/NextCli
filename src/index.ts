#!/usr/bin/env node

// import inquirer from "inquirer";
// import questions from "./questions";
import gradient from "gradient-string";
// import chalkAnimation from "chalk-animation";
import chalk from "chalk";
import figlet from "figlet";

// const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

// inquirer.prompt(questions).then((ans) => {
//   console.log({ ans });
// });

async function welcome() {
  figlet(`React Workspace CLI`, (_err, data) => {
    console.log(gradient.pastel.multiline(data) + "\n");

    console.log(
      chalk.red(
        `Hello World`
      )
    );
    process.exit(0);
  });
}

welcome();
