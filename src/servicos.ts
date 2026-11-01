import type { NovaReceita, Receita } from "./tipos";

function gerarId(lista: Receita[]): number {
  let maior = 0;
  for (const receita of lista) {
    if (receita.id > maior) maior = receita.id;
  }
  return maior + 1;
}

export function adicionarReceita(
  lista: Receita[],
  dados: NovaReceita
): Receita {
  if (dados.nome.trim().length < 3) {
    throw new Error("O nome da receita precisa ter pelo menos 3 caracteres.");
  }

  const receita: Receita = {
    ...dados,
    id: gerarId(lista),
    status: "rascunho",
    criadaEm: new Date()
  };

  lista.push(receita);
  return receita;
}

export function transformar<T, R>(
  lista: T[],
  regra: (item: T) => R
): R[] {
  const resultado: R[] = [];
  for (const item of lista) resultado.push(regra(item));
  return resultado;
}
