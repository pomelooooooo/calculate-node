#!/usr/bin/env node

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

const cli = yargs(hideBin(process.argv));

cli.command('sum <a> <b>', 'Sum two numbers',{
    a: {
        type: 'number',
        demandOption: true,
        describe: 'The first number'
    },
    b: {
        type: 'number',
        demandOption: true,
        describe: 'The second number'
    }
}, (argv) => {
    console.log('Result:', argv.a + argv.b);
})

cli.command('sub <a> <b>', 'Subtract two numbers',{
    a: {
        type: 'number',
        demandOption: true,
        describe: 'The first number'
    },
    b: {
        type: 'number',
        demandOption: true,
        describe: 'The second number'
    }
}, (argv) => {
    console.log('Result:', argv.a - argv.b);
})

cli.command('mul <a> <b>', 'Multiply two numbers',{
    a: {
        type: 'number',
        demandOption: true,
        describe: 'The first number'
    },
    b: {
        type: 'number',
        demandOption: true,
        describe: 'The second number'
    }
}, (argv) => {
    console.log('Result:', argv.a * argv.b);
})

cli.command('div <a> <b>', 'Divide two numbers',{
    a: {
        type: 'number',
        demandOption: true,
        describe: 'The first number'
    },
    b: {
        type: 'number',
        demandOption: true,
        describe: 'The second number'
    }
}, (argv) => {
    if (argv.b === 0) {
        console.log('Error: Division by zero');
        return;
    } else {
        console.log('Result:', argv.a / argv.b);
    }
})

cli.help('h').alias('h', 'help').parse();