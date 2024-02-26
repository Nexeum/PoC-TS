import { CommandLineAdapterImpl } from './CliAdapter';

const adapter = new CommandLineAdapterImpl();

const output = adapter.execute('ls -lah');

console.log(output);
