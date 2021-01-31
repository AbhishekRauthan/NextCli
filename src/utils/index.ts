import { ensureDirSync, writeFile } from 'fs-extra';
import { join } from 'path';
import { App, index, packageJsonName, readMe, tsConfig } from '../templates';


export function createInitalFiles(folderName: string, dir: string) {
  writeFile(join(dir, 'package.json'), packageJsonName(folderName))
    .then(() => console.log("Success"))
    .catch(err => console.log(err));

  writeFile(join(dir, 'tsconfig.json'), tsConfig)
    .then(() => console.log("Success tsconfig"))
    .catch(err => console.log(err));

  writeFile(join(dir, 'README.md'), readMe)
    .then(() => console.log("Success readme"))
    .catch(err => console.log(err))
}

export function createSrcFiles(dir:string) {
  dir = join(dir, 'src');
  ensureDirSync(dir);
  writeFile(join(dir, 'App.tsx'), App)
    .then(() => console.log("Success App"))
    .catch(err => console.log(err))
  writeFile(join(dir, 'index.tsx'), index)
    .then(() => console.log("Success index"))
    .catch(err => console.log(err))
}