import { writeFile, writeJSON } from 'fs-extra';
import { join } from 'path';
import { packageJsonName, readMe, tsConfig } from '../templates';


export function createInitalFiles(folderName: string, dir: string) {
  writeJSON(join(dir, 'package.json'), packageJsonName(folderName))
    .then(() => console.log("Success"))
    .catch(err => console.log(err));

  writeJSON(join(dir, 'tsconfig.json'), tsConfig)
    .then(() => console.log("Success tsconfig"))
    .catch(err => console.log(err));

  writeFile(join(dir, 'README.md'), readMe)
    .then(() => console.log("Success readme"))
    .catch(err => console.log(err))
}