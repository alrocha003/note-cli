#!/usr/bin/env node
import { exit } from 'process';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers'
import { addNote, displayNotes } from './options.js';

const INDICE_OPTION = 2;
const INDICE_VALUE = 3;

(function init() {
    const argv = yargs(hideBin(process.argv)).argv;

    if (process?.argv[INDICE_OPTION] === undefined) {
        console.error('Necessário informar opção de execução - Ex: --add | -a | --list | -l | --search | -s ', 5);
        exit(1);
    }

    if (process?.argv[INDICE_OPTION]?.indexOf('--add') > -1 || process?.argv[INDICE_OPTION]?.indexOf('-a') > -1)
        addNote(process.argv[INDICE_VALUE]);
    else if (process?.argv[INDICE_OPTION]?.indexOf('--list') > - 1 || process?.argv[INDICE_OPTION]?.indexOf('-l') > - 1)
        displayNotes();
    else
        console.warn(`${process?.argv[INDICE_OPTION]} não é reconhecido como uma opção válida`, 5);
})();

