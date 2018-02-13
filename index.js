const chalk = require('chalk');
const { exec } = require('child_process');

console.log(`Uninstalling ${chalk.cyan('react')}...`);
exec('npm uninstall react', (err, stdout, stderr) => {
  if (err) {
    console.error('Failed to uninstall react :(')
    return;
  }
  console.log(`${stdout}`);
  console.log(`${stderr}`);
});

