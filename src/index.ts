import { prompt } from 'inquirer';
import { basename, join } from 'path';
import { ensureDirSync } from 'fs-extra';
import { questions } from './questions';
import { createInitalFiles } from './utils';

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
  createInitalFiles(folderName, dir);
});
