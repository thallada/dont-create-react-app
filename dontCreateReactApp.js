#! /usr/bin/env node
const chalk = require('chalk');
const commander = require('commander');
const fs = require('fs-extra');
const path = require('path');
const os = require('os');
const packageJson = require('./package.json');

let projectName;

const program = new commander.Command(packageJson.name)
  .version(packageJson.version)
  .arguments('<project-directory>')
  .usage(`${chalk.green('<project-directory>')}`)
  .action(name => {
    projectName = name;
  })
  .on('--help', () => {
    console.log();
    console.log(`  ${chalk.red('There is no help.')}`);
    console.log();
  })
  .parse(process.argv);

function dontCreateApp(name) {
  const root = path.resolve(name);
  const appName = path.basename(root);

  console.log(`Not creating a new React app in ${chalk.green(root)}.`);
  console.log();

  fs.ensureDirSync(name);

  const packageJson = {
    name: appName,
    version: '0.1.0',
    private: 'true',
    description: "Not a react app.",
    keywords: [
      'not-react',
    ],
  };
  fs.writeFileSync(
    path.join(root, 'package.json'),
    JSON.stringify(packageJson, null, 2) + os.EOL
  );

  console.log('Not installing packages. This will not take a couple of minutes.')
  console.log();

  setTimeout(() => {
    process.stdout.write('.');
    setTimeout(() => {
      process.stdout.write('.');
      setTimeout(() => {
        process.stdout.write('.');
        setTimeout(() => success(appName, root), 500);
      }, 500);
    }, 1000);
  }, 1000);
}

function success(appName, appPath) {
  console.log();
  console.log('added 0 packages in 3.0s');
  console.log();
	console.log(`Success! Created ${appName} at ${appPath}`);
  console.log(`Inside that directory, you can run these commands:`)
  console.log();
  console.log(chalk.cyan('  nothing'));
  console.log('    There is nothing to run.');
  console.log();
  console.log('We suggest that you begin by typing:');
  console.log();
  console.log(chalk.cyan('  cd'), appPath);
  console.log(`  ${chalk.cyan('vim not-react.js')}`);
  console.log();
  console.log('Happy Hacking!');
}

if (typeof projectName == 'undefined') {
  console.error('Please specify the project directory:');
  console.log(
    `  ${chalk.cyan(program.name())} ${chalk.green('<project-directory>')}`
  )
  console.log('For example:');
  console.log(`  ${chalk.cyan(program.name())} ${chalk.green('my-not-react-app')}`);
  console.log();
  console.log(
    `Run ${chalk.cyan(`${program.name()} --help`)} to see no options.`
  );
  process.exit(1);
}

dontCreateApp(projectName);
