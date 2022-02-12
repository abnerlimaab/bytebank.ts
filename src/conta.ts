import { Cliente } from "./cliente";

export class Conta {

    private _saldo : number;
    private _cliente : Cliente;
    private _agencia : number;

    constructor(saldoInicial: number, cliente: Cliente, agencia: number) {
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    get saldo() {
        return this._saldo;
    }

    get agencia() {
        return this._agencia;
    }

    set cliente(cliente: Cliente) {
        this._cliente = cliente;
    }

    sacar(valor: number) {
        let taxa = 1;
        return this._sacar(valor, taxa);
    }
    
    protected _sacar(valor: number, taxa: number) {
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        }
        return 0;
    }

    depositar(valor: number){
        if(valor <= 0)
        {
            return;
        } 
        this._saldo += valor;           
    }

    tranferir(valor: number, conta: Conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}