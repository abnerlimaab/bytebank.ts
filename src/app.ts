import { Diretor } from "./funcionarios/diretor";
import { Gerente } from "./funcionarios/gerente";
import { SistemaAutenticacao } from "./sistema-autenticacao";

const diretor = new Diretor("Rodrigo", 1000, "123.456.789-10");
const gerente = new Gerente("Ricardo", 1000, "123.456.789-10");

diretor.cadastrarSenha("teste");

console.log(SistemaAutenticacao.login(diretor, "teste"));