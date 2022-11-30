import * as fs from 'fs';

const FILE_NAME = 'db';

let InitialLogo = () => {
    console.table('|----------------------------------------------------------------------------------------------------------|');
    console.table('|------------------------------------------------Note`s CLI------------------------------------------------|');
    console.table('|----------------------------------------------------------------------------------------------------------|');
}

let addNote = (note) => {
    let register = `${note};${Date.now()};#`;
    fs.appendFile(`./${FILE_NAME}.csv`, register, (err, _) => {
        if (err)
            console.error(err);
    });

    console.debug('(1) nova nota adicionada.');
}

let displayNotes = () => {
    InitialLogo();
    fs.readFile(`./${FILE_NAME}.csv`, (error, data) => {
        if (error) {
            console.error(`Não foi possível ler os dados da base: ${error}`);
            return;
        }

        let lines = data.toString('utf8').split('#');
        let table = [];

        lines.forEach(p => {
            let register = p.split(';');
            if (register[1] === undefined)
                return;

            table.push({ Content: register[0], Date: register[1] });
        });

        console.table(table);
    });
}

export { addNote, displayNotes };