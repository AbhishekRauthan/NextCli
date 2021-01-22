// import fs from 'fs';
import {basename} from 'path';
import { prompt } from 'inquirer';

prompt([
  {
    type: 'input',
    name: 'folderName',
    message: "Enter the folder's Name",
    default: function () {
      return basename(process.cwd());
    }
  },
]).then(ans => {
  console.log(ans);
  
})