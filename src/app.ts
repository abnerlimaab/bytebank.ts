import { Cliente } from "./cliente";
import { Conta } from "./conta";
import { ContaCorrente } from "./conta-corrente";
import { ContaPoupanca } from "./conta-poupanca";

const cliente = new Cliente("Abner", "123.456.789-10");

const contaCorrente = new ContaCorrente(123, cliente);

const contaPoupanca = new ContaPoupanca(100, 234, cliente);

console.log(cliente, contaCorrente, contaPoupanca);