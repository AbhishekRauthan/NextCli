import pro = require("child_process");

const installPackage = (cmd: string) => {
  const child = pro.exec(cmd, function (error, stdout, stderr) {
    if (stderr !== null) {
      console.log("" + stderr);
    }
    if (stdout !== null) {
      console.log("" + stdout);
    }
    if (error !== null) {
      console.log("" + error);
    }
  });
};

module.exports = installPackage