const sqlit3 = require('sqlite3').verbose();

let sql;

// Conectando com o BD
const db = new sqlit3.Database('./test.db', sqlit3.OPEN_READWRITE, (err) => {
    if (err) return console.error(err.message);
})

// Criando a tabela
function


// Apagando a tabela