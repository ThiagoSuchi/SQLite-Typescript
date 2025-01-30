import { db } from "../app";

// Apagando a tabela
export function dropTableUser() {
    const query = `DROP TABLE usuario`;
    db.run(query)
}