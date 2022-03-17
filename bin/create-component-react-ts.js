#!/usr/bin/env node

import url from "node:url";
import path from "node:path";

import chalk from "chalk";
import minimist from "minimist";

import { Plop, run } from "plop";

const argv = minimist(process.argv.slice(2));
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

if (argv._.length >= 2) {
  console.log(chalk.cyan("[Create-Component-React-TS] ") + chalk.blue(`Creating a ${argv._[0]} ${argv._[1]} ....`));
}

Plop.prepare({
  cwd: argv.cwd,
  preload: argv.preload || [],
  configPath: path.join(__dirname, '../', 'plopfile.cjs'),
  completion: argv.completion,
}, (env) =>  {
  Plop.execute(env, (env) => {
    const options = {
      ...env,
      dest: process.cwd()
    }
    // const { modulePackage, ...printOpts } = options;
    // console.debug(chalk.cyan("[Create-Component-React-TS] Options: "));
    // console.debug(printOpts);
  return run(options, undefined, true)
  });
});

// Plop.prepare({
//   cwd: argv.cwd,
//   preload: argv.preload || [],
//   configPath: argv.plopfile || path.join(__dirname, '../', 'plopfile.cjs'),
//   completion: argv.completion,
// }, (env) => Plop.execute(env, run));
