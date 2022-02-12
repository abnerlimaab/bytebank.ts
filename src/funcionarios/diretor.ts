import { Funcionario } from "./funcionario";

export class Diretor extends Funcionario {

    constructor(nome: string, salario: number, cpf: string) {
        super(nome, salario, cpf);
        this._bonificacao = 2;
    }

}