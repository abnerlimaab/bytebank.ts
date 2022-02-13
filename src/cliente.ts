import { Autenticavel } from "./autenticavel";

export class Cliente implements Autenticavel {
    
    private _nome: string;
    private _cpf: string;
    private _senha: string;

    constructor(nome : string, cpf : string, senha: string) {
        this._nome = nome;
        this._cpf = cpf;
        this._senha = senha;
    }
    autenticar(senha: string): boolean {
        return this._senha == senha;
    }

}