import { Cliente } from "./cliente";
import { Conta } from "./conta";

export class ContaSalario extends Conta {
    
    constructor(cliente: Cliente) {
        super(0, cliente, 100);
    }

    sacar(valor: number): number {
        const taxa = 1.01;
        return this._sacar(valor, taxa);
    }
    
}