// import fs from 'fs';
import { basename } from 'path';
import { prompt } from 'inquirer';

const Ans = [];
prompt([
  {
    type: 'input',
    name: 'folderName',
    message: "Enter the folder's Name",
    default() {
      return basename(process.cwd());
    },
  },
  {
    type: 'confirm',
    name: 'NeedUILib',
    message: 'Do you wish to use a UI Library?',
    default: false,
  },
  {
    type: 'list',
    name: 'UIlib',
    message: 'Select a UI library from given options: ',
    when(ans:any) {
      return ans.NeedUILib;
    },
    choices: ['Material UI', 'Reactstrap', 'Semantic UI'],
  },
  {
    type: 'confirm',
    name: 'NeedStateM',
    message: 'Do you wish to use a State management library?(Defaults to Context API)',
    default: false,
  },
  {
    type: 'list',
    name: 'StateM',
    message: 'Select a State management library from given options: ',
    when(ans:any) {
      return ans.NeedStateM;
    },
    choices: ['Redux', 'Mob X', 'Recoil'],
  },
  {
    type: 'confirm',
    name: 'NeedCSSJS',
    message: 'Do you wish to use a CSS in JS library?',
    default: false,
    when(ans:any) {
      return !ans.NeedUILib;
    },
  },
  {
    type: 'list',
    name: 'StateM',
    message: 'Select a State management library from given options: ',
    when(ans:any) {
      return ans.NeedCSSJS;
    },
    choices: ['emotion', 'styled components'],
  },
  {
    type: 'confirm',
    name: 'Needstory',
    message: 'Do you wish Storybook in  your project?',
    default: true,
  },
]).then((ans) => {
  console.log(ans);
});
