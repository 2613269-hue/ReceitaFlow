export type Dificuldade = "facil" | "media" | "dificil";
export type StatusReceita = "rascunho" | "testada" | "favorita";

export interface Receita {
  readonly id: number;
  nome: string;
  descricao?: string;
  dificuldade: Dificuldade;
  status: StatusReceita;
  ingredientes: string[];
  criadaEm: Date;
}

export type NovaReceita = Omit<Receita, "id" | "status" | "criadaEm">;
