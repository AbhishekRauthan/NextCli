#!/usr/bin/env node

import inquirer from "inquirer";
import questions from "./questions.js";
import gradient from "gradient-string";
import chalk from "chalk";

const sleep = async (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function welcome() {
  console.clear();
  let coolgradientString = gradient(["#10b981", "#14b8a6", "#06b6d4"])(
    ">>> React Workspace CLI <<<"
  );
  console.log(coolgradientString);

  await sleep();
  inquirer.prompt(questions).then((ans) => {
    console.clear();
    console.log({ ans });
  });
}

welcome();
