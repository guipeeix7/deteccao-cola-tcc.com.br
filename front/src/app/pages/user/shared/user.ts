import { Aluno } from "./Aluno";
import { Professor } from "./Professor";

export interface User {
  id: number;
  name: string;
  email: string;
  email_verified_at: string | null;
  password: string;
  remember_token: string | null;
  created_at: string | null;
  updated_at: string | null;
  apelido?: string | null;
  CPF?: string | null;
  dataNascimento?: string | null;
  status: number;
  lastIpAddress?: string | null;
  fotoPerfil?: string | null;
  aluno?:Aluno;
  professor?:Professor;
  schoolSufix?:string;
}
