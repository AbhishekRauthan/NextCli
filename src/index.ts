import { prompt } from 'inquirer';
import { basename } from 'path';
import { ensureDirSync } from 'fs-extra';
import { questions } from './questions';

prompt(questions).then((ans) => {
  if (basename(process.cwd()) === ans.folderName) {
    console.log('In Same folder');
  } else {
    const dir = `${process.cwd()}/${ans.folderName}`;
    ensureDirSync(dir)
  }
  console.log("Helllllllllllo");

});
