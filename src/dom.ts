export function elemento(id: string): HTMLElement {
  const encontrado = document.getElementById(id);
  if (!encontrado) {
    throw new Error(`Não existe nenhum elemento com o id "${id}".`);
  }
  return encontrado;
}

export function campo(id: string): HTMLInputElement {
  const encontrado = document.getElementById(id);
  if (!(encontrado instanceof HTMLInputElement)) {
    throw new Error(`O elemento "${id}" não é um campo de texto válido.`);
  }
  return encontrado;
}

export function selecao(id: string): HTMLSelectElement {
  const encontrado = document.getElementById(id);
  if (!(encontrado instanceof HTMLSelectElement)) {
    throw new Error(`O elemento "${id}" não é uma seleção válida.`);
  }
  return encontrado;
}
