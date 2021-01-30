import { prompt } from 'inquirer';
import { basename, join } from 'path';
import { ensureDirSync, writeJSON } from 'fs-extra';
import { questions } from './questions';
import { packageJsonFunc } from './templates';

let dir: string;
let folderName: string;

prompt(questions).then((ans) => {
  folderName = ans.folderName;
  if (basename(process.cwd()) === ans.folderName) {
    dir = process.cwd();
  } else {
    dir = join(process.cwd(), ans.folderName);
    ensureDirSync(dir)
  }
  writeJSON(join(dir, 'package.json'), packageJsonFunc(folderName))
    .then(() => {
      console.log("Success");
    })
    .catch(err => console.log(err))

});
