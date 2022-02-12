import { Funcionario } from "./funcionarios/funcionario";

export class SistemaAutenticacao {
    static login(funcionario: Funcionario, senha: string): boolean {
        return funcionario.autenticar(senha);
    }
}