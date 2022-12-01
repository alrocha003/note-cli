#!/usr/bin/env node
import { exit } from 'process';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers'
import { addNote, displayNotes } from './options.js';

const INDICE_OPTION = 2

const argv = yargs(hideBin(process.argv)).argv;

console.debug(argv?.add !== undefined);

if (process?.argv[INDICE_OPTION] === undefined) {
    console.error('Necessário informar opção de execucão/n Ex: --add | -a | -l | --list', 5);
    exit(1);
}

if (process?.argv[INDICE_OPTION]?.indexOf('--add') > -1 || process?.argv[INDICE_OPTION]?.indexOf('-a') > -1)
    addNote(process.argv[3]);
else if (process?.argv[INDICE_OPTION]?.indexOf('--list') > - 1 || process?.argv[INDICE_OPTION]?.indexOf('-l') > - 1)
    displayNotes();
else
    console.warn(`${process?.argv[INDICE_OPTION]} não é reconhecido como uma opção válida`, 5);


