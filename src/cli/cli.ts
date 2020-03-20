import program from 'commander';
import { yellow } from 'kleur';
import { install as installCi } from 'playwright-ci';
import updateNotifier from 'update-notifier';
import { buildCreateCommand } from './createCommand';
import { howl } from './howl';
import { buildTestCommand } from './testCommand';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const pkg = require('../../package');
updateNotifier({ pkg }).notify();

program.usage('<command> [options]').version(pkg.version);

program
  .command('ci')
  .description('☁️ set up CI')
  .action(async () => await installCi());

program.addCommand(buildCreateCommand());

program
  .command('howl')
  .description('🐺')
  .action(howl);

program.addCommand(buildTestCommand());

program.arguments('<command>').action(cmd => {
  console.log(yellow(`Invalid command "${cmd}"\n`));
  program.help();
});

program.allowUnknownOption(false);

export const runCli = (): void => {
  program.parse(process.argv);

  if (!process.argv.slice(2).length) {
    console.log('\n');
    program.outputHelp();
  }
};
