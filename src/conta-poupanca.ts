import { Cliente } from "./cliente";
import { Conta } from "./conta";

export class ContaPoupanca extends Conta {

    constructor(saldoInicial: number, agencia: number, cliente: Cliente) {
        super(saldoInicial, cliente, agencia);
    }
    
}