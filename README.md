# ReceitaFlow

Projeto didático adaptado do TaskFlow das Aulas 1 e 2 para um catálogo de receitas culinárias.

## Requisitos
- Node.js instalado
- VS Code (recomendado)
- MySQL Workbench, caso queira criar o banco

## Abrir e executar
1. Extraia a pasta `ReceitaFlow`.
2. Abra essa pasta no VS Code (`Arquivo > Abrir Pasta`).
3. No terminal integrado, execute:

   ```bash
   npm install
   npm run verificar
   npm run dev
   ```

4. Abra no navegador o endereço informado pelo Vite, normalmente `http://localhost:5173`.

## Estrutura
- `index.html`: estrutura da página e formulário.
- `css/taskflow.css`: estilos visuais (o nome do arquivo foi mantido para ficar próximo da apostila).
- `src/tipos.ts`: tipos e interface `Receita`.
- `src/dados.ts`: seis receitas de exemplo.
- `src/dom.ts`: funções auxiliares para acessar elementos da página.
- `src/servicos.ts`: validação, cadastro e função de alta ordem.
- `src/main.ts`: exibição, contadores e evento de cadastro.
- `banco/receitaflow.sql`: criação das quatro tabelas do banco.

## Observações
- O cadastro na página é temporário: os dados novos ficam apenas na memória e somem ao atualizar.
- O SQL cria a estrutura do banco, mas ainda não insere usuários/receitas de exemplo nem conecta a página ao MySQL.
- A integração com banco exige uma API backend, prevista para uma etapa posterior do material.
- O formulário atual cadastra nome e dificuldade; os ingredientes das receitas iniciais são exemplos e o formulário ainda não permite editar a lista de ingredientes.
