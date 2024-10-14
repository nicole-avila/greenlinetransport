const { exec } = require('child_process');

const buildNextApp = () => {
  exec('npm run build', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error building the app: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Build stderr: ${stderr}`);
      return;
    }
    console.log(`Build output: ${stdout}`);
  });
};

buildNextApp();
