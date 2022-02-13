import { Autenticavel } from "./autenticavel";

export class SistemaAutenticacao {
    static login(autenticavel: Autenticavel, senha: string): boolean {
        return autenticavel.autenticar(senha);
    }
}