// import fs from 'fs';
import { basename } from 'path';
import { prompt } from 'inquirer';

function NeedUIlibrary(NeedUIlibrary: boolean) {
  if (NeedUIlibrary) {
    prompt([
      {
        type: 'list',
        name: 'UIlibrary',
        message: 'Select UI liberary from given options?',
        choices: ['Material ui', 'React Bootstrap', 'Semantic UI React'],
        filter: function (val) {
          return val.toLowerCase();
        },
      }
    ]).then(ans => {
      Ans.push(ans.UIlibrary);
      console.log(Ans);
      
    })
  }
}

const Ans = [];
prompt([
  {
    type: 'input',
    name: 'folderName',
    message: "Enter the folder's Name",
    default: function () {
      return basename(process.cwd());
    }
  },
  {
    type: 'confirm',
    name: 'NeedUIlibrary',
    message: 'Do you wish to use any UI library?',
    default: false
  }
]).then(ans => {
  Ans.push(ans.folderName)
  NeedUIlibrary(ans.NeedUIlibrary);
})

