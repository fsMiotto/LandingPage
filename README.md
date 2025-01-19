# README - Workflow do Projeto

## Visão Geral
Este projeto utiliza o GitHub para controle de versão e colaboração. Este documento apresenta de forma direta como será o workflow seguido pela equipe, além de regras e práticas essenciais.

---

## Regras Gerais
1. **Sempre utilize a chave SSH ao clonar o repositório.**
2. **Não dê push direto na main, todas as alterações devem passar por Pull Requests (PRs).**
3. **É necessário que o código seja revisado por pelo menos um membro para o PR ser aprovado.**
4. **Padrão de Nomeação de Branches:**
   - As branches das tasks devem seguir o formato: LP-{número-da-task}.
   - As branches das grandes tarefas devem seguir o formato: {nome-da-grande-tarefa}
   - O número da task pode ser encontrado no board do projeto na aba "Projetos".


---

## Estrutura de Workflow

criação da branch da task -> alteração do codigo -> commit para branch da task -> pull request -> inserção na branch da grande tarefa -> inserção na main

### Divisão de Tarefas
- O projeto será dividido em **grandes tarefas** (funcionalidades principais).
- Cada grande tarefa será subdividida em **pequenas tarefas** (tasks).
- Cada task possui um nome e um número único no board de projetos.

**Exemplo:**
- **Grande Tarefa:** Página inicial do site.
  - Task 1: Criar a Header.
  - Task 2: Botão de configuração.
  - Task 3: Menu suspenso do perfil.
  - Task 4: Estruturar o Banner.
  - Task 5: Rotatividade do Banner.

### Ciclo de Desenvolvimento
1. **Criação da Branch da Task** e **Alteração do Código:**
   - Cada task será desenvolvida em uma branch separada.
   - Os commits devem ser realizados na branch da task
5. **Pull Request para a Branch da Grande Tarefa:**
   - A branch da grande tarefa integra todas as branches de tasks relacionadas.
   - Após finalizar uma task, abra um PR da branch da task para a branch correspondente à grande tarefa.
   - Exemplo: Mesclar `LP-1` para a branch `feature-homepage` (grande tarefa).
7. **Pull Request para a Main:**
   - Quando todas as tasks de uma grande tarefa estiverem finalizadas, abra um PR da branch da grande tarefa para a branch `main`.
   - Certifique-se de que os testes foram executados e o código está funcional.

---

Siga este workflow para garantir que o projeto seja desenvolvido de maneira eficiente e organizada. Consulte o documento de tutoriais para instruções detalhadas sobre como realizar cada etapa do workflow.

