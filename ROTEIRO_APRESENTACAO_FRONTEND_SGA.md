# Roteiro de Apresentação — Frontend do SGA

**Tema:** Interface web, experiência do usuário e integração do frontend com a API  
**Tempo previsto:** 12 minutos  
**Formato:** apresentação técnica seguida de demonstração prática

## 1. Preparação

Antes da apresentação:

- Iniciar o frontend com `npm start` dentro da pasta `APP/font_end`.
- Iniciar o backend principal na porta configurada.
- Confirmar que o Supabase está configurado.
- Abrir inicialmente a página `/`.
- Preparar dados de um ambiente, uma turma, uma aula e uma sugestão de manutenção.
- Separar contas ou dados fictícios para os perfis Coordenação e Manutenção.
- Testar todos os botões que serão demonstrados.
- Usar o navegador em tela cheia ou com zoom de aproximadamente 100%.

## 2. Distribuição do tempo

| Parte | Assunto | Tempo |
|---|---|---:|
| 1 | Abertura e objetivo da interface | 1 min |
| 2 | Tecnologias do frontend | 1 min |
| 3 | Estrutura da aplicação | 1 min |
| 4 | Página inicial pública | 1 min 30 seg |
| 5 | Login e painel por perfil | 1 min |
| 6 | Telas de cadastro e alocação | 2 min |
| 7 | Sugestão pública de manutenção | 1 min 30 seg |
| 8 | Direcionamento de manutenção | 1 min |
| 9 | Relatórios e telemetria | 1 min |
| 10 | Conceitos aplicados e próximos passos | 1 min |

**Tempo total: 12 minutos.**

## 3. Roteiro completo

### Parte 1 — Abertura e objetivo da interface (1 minuto)

**Fala sugerida:**

> Nesta apresentação, vamos apresentar o frontend do SGA — Sistema de Gestão de Ambientes — mostrando como os usuários acessam, consultam e registram informações relacionadas aos ambientes da instituição.

Explique:

- O frontend é a interface utilizada pelo público e pelos perfis internos.
- Ele organiza funcionalidades de consulta, cadastro, alocação, manutenção e relatório.
- O objetivo é tornar o sistema fácil de utilizar e apresentar as informações de forma clara.

Pergunta de abertura:

> Como uma interface deve ajudar uma coordenação, um docente ou o setor de manutenção a encontrar rapidamente a informação que precisa?

A resposta está na navegação organizada, nos formulários com opções controladas e nos painéis por perfil.

### Parte 2 — Tecnologias do frontend (1 minuto)

Apresente o conjunto tecnológico:

- **React 19:** criação da interface por componentes.
- **React Router DOM:** navegação entre páginas sem recarregar toda a aplicação.
- **JavaScript ES6+:** estados, eventos e comunicação assíncrona.
- **CSS:** identidade visual e organização do layout de cada tela.
- **Fetch API:** comunicação com o backend.
- **Create React App:** estrutura de desenvolvimento e execução.
- **Jest e Testing Library:** testes de componentes e regras de interface.

**Fala sugerida:**

> O frontend foi desenvolvido em React, usando componentes reutilizáveis, rotas para navegação e chamadas à API para obter e enviar dados. A interface não utiliza dados fictícios fixos nas operações principais: ela busca informações reais do backend.

### Parte 3 — Estrutura da aplicação (1 minuto)

Apresente os arquivos principais:

- `index.js`: ponto de entrada da aplicação React.
- `App.js`: configuração das rotas.
- `api.js`: função responsável pelas requisições ao backend.
- Arquivos `*.js`: componentes das páginas e funcionalidades.
- Arquivos `*.css`: estilos separados por página ou componente.

Explique:

- Cada tela está organizada como um componente.
- `App.js` define os caminhos acessados no navegador.
- `apiFetch` permite configurar a URL da API por variável de ambiente.
- Estados do React controlam carregamentos, mensagens e dados dos formulários.

**Fala sugerida:**

> A organização facilita manutenção e evolução. Por exemplo, o mesmo mecanismo de comunicação pode ser utilizado por alocação, cadastro, relatório e manutenção.

### Parte 4 — Página inicial pública (1 minuto 30 segundos)

Navegue para `/`.

Destaques da demonstração:

1. Mostre o cabeçalho do SGA.
2. Explique o painel de aulas em andamento.
3. Destaque o horário atual exibido pela página.
4. Mostre como os ambientes ocupados são apresentados.
5. Explique o botão público de sugestão de manutenção.
6. Mostre o acesso ao login.

Conceitos utilizados:

- `useState` controla listas e estados de carregamento.
- `useEffect` carrega ambientes e alocações ao abrir a página.
- `useMemo` filtra as alocações do dia e horário atuais.
- `apiFetch` realiza as requisições ao backend.
- Estados visuais informam carregamento, erro e ausência de dados.

**Fala sugerida:**

> Esta é uma página pública. Ela apresenta as aulas em andamento e oferece acesso rápido ao relato de problemas. Não é necessário estar autenticado para acessar o formulário público de manutenção.

### Parte 5 — Login e painel por perfil (1 minuto)

Acesse `/login`.

Mostre:

- Campo de usuário.
- Campo de senha.
- Mensagem de erro para dados inválidos.
- Navegação para o painel de relatórios após o login.

Explique:

- O frontend identifica o perfil retornado pelo login atual.
- O painel utiliza o perfil para mostrar somente ações relacionadas ao usuário.
- Os perfis apresentados são Coordenação, Secretaria, Docente e Manutenção.

**Observação técnica importante:**

> Na versão atual, o login demonstrado usa um arquivo JSON público como fonte de validação. Essa implementação será substituída por autenticação segura no backend. O frontend não deve guardar uma senha ou autorização como mecanismo definitivo de segurança.

Mostre como o painel altera ações:

- Coordenação: alocação, atribuição e cadastro.
- Secretaria: cadastro de turma e docente.
- Docente: solicitação de ambiente.
- Manutenção: direcionamento de manutenção.

### Parte 6 — Telas de cadastro e alocação (2 minutos)

Faça login como Coordenação e selecione “Alocação de ambiente”.

Demonstre:

1. Carregamento dos ambientes.
2. Seleção de ambiente.
3. Seleção da aula.
4. Seleção do dia da semana.
5. Seleção do período.
6. Seleção do horário correspondente.
7. Exibição dos detalhes do ambiente.
8. Envio da alocação.
9. Mensagem de sucesso ou erro.

Pontos técnicos para explicar:

- Os dados são carregados pelo backend ao montar o componente.
- O formulário usa um único objeto de estado.
- A alteração de período limpa o horário anterior.
- Os `<select>` são preenchidos dinamicamente.
- O ambiente selecionado apresenta tipo, capacidade e status.
- O envio utiliza `POST` com formato JSON.
- O backend responde com sucesso ou mensagem de erro.

**Fala sugerida:**

> Aqui podemos observar uma regra de experiência: quando o usuário seleciona o período, o sistema oferece somente os horários daquele período. Isso reduz erros e facilita o preenchimento.

Em seguida, abra uma tela de cadastro ou atribuição.

Destaque:

- Campos organizados em formulários.
- Validação obrigatória pelo navegador e pelo backend.
- Carregamento de listas relacionadas.
- Envio assíncrono sem recarregar a página.

### Parte 7 — Sugestão pública de manutenção (1 minuto 30 segundos)

Volte à página inicial e clique em “Sugestão de manutenção”.

Demonstre:

1. Campo de nome.
2. Seleção do ambiente.
3. Descrição do problema.
4. Carregamento dos ambientes pela API.
5. Preenchimento automático do local.
6. Envio da sugestão.
7. Mensagem de confirmação.

Explique:

- O formulário é acessado sem login.
- Os ambientes vêm do backend e não de uma lista fixa no componente.
- Quando o ambiente é selecionado, o campo de local recebe o código e o nome do ambiente.
- `submitted` controla a mensagem de sucesso.
- `error` controla mensagens de falha.
- `sending` impede um novo envio durante o processamento.

**Fala sugerida:**

> O usuário não precisa conhecer o perfil ou o painel administrativo para informar um problema. Ele seleciona o ambiente, descreve o que aconteceu e envia a sugestão.

Mostre a separação conceitual:

- A interface pública envia uma sugestão.
- O sistema administrativo recebe e analisa essa sugestão.
- A sugestão não é automaticamente considerada uma ocorrência concluída.

### Parte 8 — Direcionamento de manutenção (1 minuto)

Acesse o painel de Manutenção e abra “Direcionamento de manutenção”.

Demonstre:

- Contagem de sugestões recebidas.
- Lista separada por Pendente, Em análise e Concluída.
- Dados do solicitante.
- Local informado.
- Campo de status.
- Campo de comentário.
- Botão de salvar direcionamento.

Pontos técnicos:

- O componente carrega todas as sugestões pela API.
- As sugestões são agrupadas por estado no frontend.
- Cada card possui um formulário próprio.
- `PATCH` atualiza o status e o comentário.
- A resposta da API atualiza o estado da interface sem recarregar a página.

**Fala sugerida:**

> Esta tela utiliza a mesma ideia de painel operacional: os registros são organizados por status, permitindo uma leitura rápida da fila de atendimento.

Não apresente como concluído:

- Conversão completa de sugestão em ocorrência.
- Cálculo completo de SLA.
- Histórico detalhado por usuário.
- Priorização avançada e responsável técnico.

### Parte 9 — Relatórios e telemetria (1 minuto)

Acesse o painel de relatórios.

Apresente:

- Relatório de ambientes.
- Relatório de turmas.
- Relatório de atribuições.
- Relatório de alocações.
- Relatório de manutenção.
- Relatório de telemetria.

Explique:

- O usuário seleciona o tipo de relatório em uma lista.
- O frontend mostra uma descrição antes da abertura.
- A navegação leva o usuário para a página específica.
- Os dados são carregados pelo backend e apresentados em tabelas ou cards.
- O relatório de telemetria acompanha informações de máquinas e integrações.

**Fala sugerida:**

> O frontend transforma dados armazenados em diferentes módulos em informações visuais para consulta. O objetivo não é apenas mostrar dados, mas permitir que o usuário encontre rapidamente o que está procurando.

### Parte 10 — Conceitos aplicados e encerramento (1 minuto)

Apresente os principais conceitos do frontend:

- Componentização.
- Navegação por rotas.
- Estado com React Hooks.
- Comunicação assíncrona com API.
- Tratamento de carregamento e erro.
- Feedback visual ao usuário.
- Separação de estilos por página.
- Navegação diferente para cada perfil.

Próximos passos do frontend:

- Substituir o login atual por autenticação segura.
- Implementar proteção de rotas por perfil.
- Criar a consulta completa de disponibilidade.
- Bloquear visualmente ambientes ocupados ou em manutenção.
- Implementar ocorrências completas e histórico.
- Adicionar filtros avançados e exportação de relatórios.
- Implementar QR Code e eventualmente RFID.
- Melhorar responsividade e testes de componentes.

Fechamento:

> O frontend do SGA organiza o acesso às principais operações do sistema em páginas públicas e painéis por perfil. Ele apresenta informações de ambientes, alocações e manutenção de forma centralizada e facilita o uso por diferentes usuários. A interface já possui uma base integrada ao backend e continuará evoluindo conforme os próximos requisitos do plano.

## 4. Demonstração técnica rápida

Para uma apresentação mais técnica, explique a sequência de uma operação:

```text
Usuário preenche o formulário
  → Componente atualiza seu estado
  → apiFetch envia uma requisição
  → Backend valida e consulta o Supabase
  → API devolve sucesso ou erro
  → React atualiza a tela
  → Usuário recebe feedback visual
```

## 5. Arquivos do frontend relacionados à apresentação

- `src/App.js`: rotas da aplicação.
- `src/api.js`: comunicação central com a API.
- `src/Home.js`: página inicial pública e painel de ocupação.
- `src/Login.js`: acesso por perfil.
- `src/Relatorio.js`: painel de ações e relatórios.
- `src/Alocação_de_ambiente.js`: formulário de alocação.
- `src/Sujestão_manutenção.js`: canal público de manutenção.
- `src/Direcionamento_de_manutenção.js`: fila de atendimento.
- `src/Relatorio_de_telemetria.js`: visualização de dados de máquinas.
- Arquivos `*.css`: identidade visual e responsividade.

## 6. Perguntas técnicas frequentes

### Por que React foi utilizado?

React permite criar interfaces por componentes, atualizar informações sem recarregar a página e organizar estados e interações.

### Como o frontend se comunica com o backend?

A função `apiFetch`, localizada em `src/api.js`, adiciona a URL base configurada e utiliza `fetch` para enviar ou solicitar dados.

### Como as telas são separadas?

O React Router configura uma rota para cada página em `App.js`. Cada rota renderiza um componente específico.

### Como os dados são atualizados?

Os componentes utilizam `useState` para armazenar dados e `useEffect` para carregar informações quando a página é aberta.

### Como o frontend valida formulários?

Há validação HTML por campos obrigatórios e validação adicional no backend. A interface utiliza estados para mostrar mensagens de sucesso e erro.

### Como o frontend controla perfis?

Na implementação atual, o perfil selecionado no login é enviado pelo estado de navegação para o painel de relatórios. No futuro, essa identificação deverá ser feita por autenticação e sessão segura validadas no backend.

### O frontend já verifica disponibilidade completa?

A alocação já permite selecionar ambiente, aula, período e horário, mas o plano prevê uma validação completa de reserva por sala, data e horário no backend.

### O frontend já contém RFID ou QR Code?

Não. São evoluções planejadas. O QR Code é uma alternativa inicial para checklist patrimonial, enquanto o RFID é uma opção futura dependente de viabilidade.

## 7. Limitações a mencionar

- Login atual não representa uma autenticação segura definitiva.
- Proteção de rotas por perfil ainda precisa ser reforçada no backend.
- Reservas completas ainda não estão implementadas.
- Conflitos de reserva precisam de validação transacional no backend.
- Ocorrência oficial, histórico completo e SLA ainda são evoluções previstas.
- QR Code e RFID ainda não estão integrados.
- O upload de fotos ainda precisa ser implementado com armazenamento adequado.

## 8. Encerramento sugerido

> Obrigado pela atenção. Esta foi uma apresentação do frontend do SGA, com foco em React, componentização, navegação, formulários, comunicação com API e experiência por perfil. Estamos disponíveis para demonstrar funcionalidades adicionais ou responder perguntas.