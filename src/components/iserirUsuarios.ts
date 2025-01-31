import { db } from "../app";
import { validUser } from "../utils/validação";

// criando usuarios
export function createUsers(nome: string, email: string, senha: string) {
    const validacao = validUser.safeParse({nome, email, senha})

    if(!validacao.success) {
        console.error('Erro de validação: ', validacao.error.format());
        return
    }
    
    const query = `
        INSERT INTO 
        usuario (nome, email, senha)
        VALUES (?, ?, ?)
    `;
    //Callback: Recebe um erro (erro) se algo der errado. Se tudo correr bem, this.lastID contém o ID do último registro inserido.
    // Valores: ['João', 'joao@example.com'] (substituem os ? no SQL).
    db.run(query, [nome, email, senha], function(this: { lastID: number }, erro: Error) {
        if (erro) {
            console.log(`Erro ao criar usuário: ${erro}`);
        } else {
            console.log(`Usuario de id ${this.lastID} cadastrado com sucesso.`);
        }
    })
}