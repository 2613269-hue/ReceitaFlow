import type { Receita } from "./tipos";

export const receitas: Receita[] = [
  {
    id: 1,
    nome: "Bolo de cenoura",
    dificuldade: "media",
    status: "favorita",
    ingredientes: ["cenoura", "farinha", "ovos"],
    criadaEm: new Date()
  },
  {
    id: 2,
    nome: "Omelete",
    dificuldade: "facil",
    status: "testada",
    ingredientes: ["ovos", "queijo"],
    criadaEm: new Date()
  },
  {
    id: 3,
    nome: "Lasanha à bolonhesa",
    descricao: "Lasanha com molho de carne",
    dificuldade: "dificil",
    status: "rascunho",
    ingredientes: ["massa", "carne", "queijo"],
    criadaEm: new Date()
  },
  {
    id: 4,
    nome: "Brigadeiro",
    dificuldade: "facil",
    status: "rascunho",
    ingredientes: ["leite condensado", "chocolate"],
    criadaEm: new Date()
  },
  {
    id: 5,
    nome: "Panqueca",
    dificuldade: "media",
    status: "rascunho",
    ingredientes: ["farinha", "leite", "ovos"],
    criadaEm: new Date()
  },
  {
    id: 6,
    nome: "Salada",
    dificuldade: "facil",
    status: "rascunho",
    ingredientes: ["alface", "manga", "tomate"],
    criadaEm: new Date()
  }
];
