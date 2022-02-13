import { Cliente } from "./cliente";
import { Diretor } from "./funcionarios/diretor";
import { SistemaAutenticacao } from "./sistema-autenticacao";

const diretor = new Diretor("Rodrigo", 1000, "123.456.789-10");
diretor.cadastrarSenha("teste");

console.log(diretor);
console.log(SistemaAutenticacao.login(diretor, "teste"));

const cliente = new Cliente("Abner", "123.456.789-10", "cliente");

console.log(cliente);
console.log(SistemaAutenticacao.login(cliente, "cliente"));