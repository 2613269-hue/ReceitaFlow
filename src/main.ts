import { campo, elemento, selecao } from "./dom";
import { receitas } from "./dados";
import type { Dificuldade, Receita } from "./tipos";
import { adicionarReceita, transformar } from "./servicos";

const nomesDificuldade: Record<Dificuldade, string> = {
  facil: "Fácil",
  media: "Média",
  dificil: "Difícil"
};

elemento("nome-do-sistema").textContent = "ReceitaFlow";
elemento("versao").textContent = "v0.2.0";
elemento("data-de-hoje").textContent = new Date().toLocaleDateString("pt-BR");

// O array inicial é copiado para que os cadastros alterem o estado desta página.
const lista: Receita[] = [...receitas];

function criarItem(receita: Receita): HTMLLIElement {
  const item = document.createElement("li");
  item.className = `receita receita--${receita.dificuldade}`;

  const icone = document.createElement("span");
  icone.className = "receita__icone";
  icone.textContent = "✦";
  icone.setAttribute("aria-hidden", "true");

  const conteudo = document.createElement("div");
  conteudo.className = "receita__conteudo";

  const titulo = document.createElement("h3");
  titulo.className = "receita__titulo";
  titulo.textContent = receita.nome;

  const detalhes = document.createElement("p");
  detalhes.className = "receita__detalhes";
  detalhes.textContent = `${receita.ingredientes.length} ingrediente(s) · ${nomesDificuldade[receita.dificuldade]}`;

  const etiqueta = document.createElement("span");
  etiqueta.className = `etiqueta etiqueta--${receita.dificuldade}`;
  etiqueta.textContent = nomesDificuldade[receita.dificuldade];

  const status = document.createElement("span");
  status.className = `status status--${receita.status}`;
  status.textContent = receita.status === "favorita" ? "Favorita" : receita.status === "testada" ? "Testada" : "Rascunho";

  conteudo.append(titulo, detalhes);
  item.append(icone, conteudo, etiqueta, status);
  return item;
}

function desenhar(): void {
  const itens = transformar(lista, criarItem);
  elemento("lista").replaceChildren(...itens);

  let rascunhos = 0;
  for (const receita of lista) {
    if (receita.status === "rascunho") rascunhos++;
  }

  elemento("total").textContent = String(lista.length);
  elemento("pendentes").textContent = String(rascunhos);
  elemento("total-lista").textContent = String(lista.length);

  let posicao = 0;
  while (posicao < lista.length && lista[posicao].dificuldade !== "dificil") {
    posicao++;
  }

  const aviso = elemento("comece-por");
  if (posicao < lista.length) {
    aviso.textContent = `Desafio da cozinha: experimente preparar ${lista[posicao].nome}.`;
    aviso.hidden = false;
  } else {
    aviso.hidden = true;
  }
}

elemento("formulario").addEventListener("submit", (evento) => {
  evento.preventDefault();
  elemento("erro").textContent = "";

  try {
    adicionarReceita(lista, {
      nome: campo("nome").value.trim(),
      dificuldade: selecao("dificuldade").value as Dificuldade,
      ingredientes: []
    });
    campo("nome").value = "";
    desenhar();
  } catch (erro) {
    if (erro instanceof Error) elemento("erro").textContent = erro.message;
  }
});

desenhar();
