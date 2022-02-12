import { Cliente } from "../cliente";
import { Conta } from "./conta";

export class ContaCorrente extends Conta {
    static numeroDeContas = 0;

    constructor(agencia: number, cliente: Cliente) {
        super(0, cliente, agencia);
        ContaCorrente.numeroDeContas++;
    }

    sacar(valor: number) {
        let taxa = 1.1;
        return this._sacar(valor, taxa);
    }
}