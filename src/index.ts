#!/usr/bin/env node
import { program, Option } from 'commander';
import { compile } from './compiler';

program.version('CrossBind 1.0.0', '-v, -version', 'outputs the current version');

const verboseLevelOption = new Option('-l, --log <level>', 'log level')
  .choices(['debug', 'info', 'warn', 'error'])
  .default('error')
  .makeOptionMandatory(true);

const pluginOption = new Option('-p, --plugin <plugin>', 'the plugin name tu run')
  .makeOptionMandatory(true)
  .choices(['react', 'vue']);

const outDirOption = new Option('-o, --output <outdir>', 'output directory')
  .makeOptionMandatory(true)
  .default('.');

program.command('compile <paths>', { isDefault: true })
  .description('path to project files or a file to compile')
  .addOption(pluginOption)
  .addOption(verboseLevelOption)
  .addOption(outDirOption)
  .action(compile);

program.parse(process.argv);
process.exit(0);