import { Autenticavel } from "../autenticavel";

export class Funcionario implements Autenticavel {

    private _nome: string;
    private _salario: number;
    private _cpf: string;
    protected _bonificacao: number;
    private _senha: string;

    constructor(nome: string, salario: number, cpf: string) {
        this._nome = nome;
        this._salario = salario;
        this._cpf = cpf;
        this._bonificacao = 1;
        this._senha = "";
    }

    autenticar(senha: string): boolean {
        return this._senha == senha;
    }

    cadastrarSenha(senha: string) {
        this._senha = senha;
    }

}