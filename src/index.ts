// import fs from 'fs';
import { prompt } from 'inquirer';
import { basename } from "path";
import { questions } from './questions';

prompt(questions).then((ans) => {
  if (basename(process.cwd()) === ans.folderName) {
    console.log("In Same folder");
    
  }
});
