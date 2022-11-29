#!/usr/bin/env node
import * as fs from 'fs';

const FILE_NAME = 'db';


console.table('----------------------------------');
console.table('------------Note`s CLI------------');
console.table('----------------------------------\n');


if (process?.argv[2]?.indexOf('--add') > -1)
    fs.appendFile(`./${FILE_NAME}.txt`, process.argv[3], (err, file) => {
        if (err) console.error(err);
    });
else
    fs.readFile(`./${FILE_NAME}.txt`, (error, data) => {
        if (error) {
            console.error(`Não foi possível ler os dados da base: ${error}`);
            return;
        }
        console.debug(data.toString('utf8'));
    });




