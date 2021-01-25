import { QuestionCollection } from 'inquirer';
import { basename } from 'path';

export const questions:QuestionCollection = [
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
    when(ans: any) {
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
    when(ans: any) {
      return ans.NeedStateM;
    },
    choices: ['Redux', 'Mob X', 'Recoil'],
  },
  {
    type: 'confirm',
    name: 'NeedRouter',
    message: 'Do you wish to use a React Router?',
    default: true,
  },
  {
    type: 'confirm',
    name: 'Needstory',
    message: 'Do you wish Storybook in  your project?',
    default: true,
  },
];
