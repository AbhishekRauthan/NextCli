const packageJson = {
  log:"Hello World!",
}


export function packageJsonFunc(name:string) {
  return {
    name,
    ...packageJson
  }
}

