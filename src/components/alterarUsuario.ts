import { db } from "../app";
import { validUser } from "../utils/validação";

export function alterUser(id: number, nome: string, email: string, senha: string) {
    const validacao = validUser.safeParse({nome, email, senha});

    if(!validacao.success) {
        console.error('Erro na validação dos campos nome, email ou senha. ', validacao.error.format());
        return;
    }

    const query = `
        UPDATE usuario
        SET nome = ?, email = ?, senha = ?
        WHERE id = ?
    `;

    db.run(query, [nome, email, senha, id], function(this: { changes: number }, erro: Error) {
        if (erro) {
            console.log(`ERRO: ${erro} Não foi possível atualizar as informações do usuário com id ${id}`);
        } else if (this.changes === 0) {
            console.log(`Usuário com id ${id} não foi encontrado.`);
        } else {
            console.log(`Usuário com id ${id} atualizado com sucesso!`);
        }
    })
}