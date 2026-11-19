# Roteiro da Apresentação — SGA

**Tempo previsto:** 12 minutos  
**Formato sugerido:** apresentação conceitual + demonstração do sistema

## 1. Preparação antes de começar

- Abrir o sistema na página inicial.
- Confirmar que o frontend e o backend estão em execução.
- Ter o login de pelo menos um perfil disponível.
- Selecionar uma turma, ambiente e sugestão que possam ser demonstrados.
- Ter uma sugestão de manutenção já criada ou criar uma durante a apresentação.
- Verificar a conexão com o Supabase.
- Manter a aba de relatórios disponível para agilizar a navegação.

## 2. Ordem da apresentação

| Parte | Conteúdo | Tempo |
|---|---|---:|
| 1 | Abertura e contexto | 1 min |
| 2 | Problema e objetivo | 1 min |
| 3 | Visão geral do sistema | 1 min |
| 4 | Perfis de acesso | 1 min |
| 5 | Demonstração da página inicial | 1 min 30 seg |
| 6 | Demonstração dos cadastros e alocações | 2 min |
| 7 | Demonstração da manutenção pública | 2 min |
| 8 | Triagem e direcionamento | 1 min 30 seg |
| 9 | Tecnologias e arquitetura | 1 min |
| 10 | Próximos passos e encerramento | 1 min |

## 3. Roteiro completo

### Parte 1 — Abertura (1 minuto)

**Apresente o projeto:**

> Bom dia/Boa tarde. Nós apresentaremos o SGA — Sistema de Gestão de Ambientes, desenvolvido pelo grupo TechFlow.

**Contextualize:**

> O projeto tem como objetivo centralizar o controle dos ambientes da instituição, relacionando salas, turmas, docentes, horários, alocações e ocorrências de manutenção.

**Pergunta de abertura:**

> Antes de saber se uma sala está disponível, muitas instituições ainda dependem de consultas manuais, mensagens ou informações dispersas. O SGA foi criado para reunir esses dados em uma única solução.

### Parte 2 — Problema e objetivo (1 minuto)

**Explique o problema:**

- Ambientes podem ser usados sem uma consulta centralizada.
- Turmas e horários nem sempre estão organizados em uma única consulta.
- Ocorrências de manutenção podem chegar sem registro ou organização.
- O setor responsável precisa identificar problemas, priorizar atendimentos e acompanhar a resolução.

**Explique o objetivo geral:**

> O objetivo do SGA é facilitar o gerenciamento dos espaços físicos, melhorando a organização, reduzindo conflitos de uso e tornando o encaminhamento de problemas de manutenção mais rápido e rastreável.

**Apresente os principais objetivos:**

- Centralizar os dados dos ambientes.
- Consultar a ocupação e disponibilidade.
- Relacionar turmas, docentes e aulas.
- Permitir sugestões públicas de manutenção.
- Separar sugestões de ocorrências oficiais.
- Gerar relatórios e acompanhar indicadores.

### Parte 3 — Visão geral do sistema (1 minuto)

Apresente a solução em três camadas:

1. **Frontend em React:** telas utilizadas pelos perfis e pelo público.
2. **Backend em Node.js e Express:** validações, regras de negócio e comunicação com o banco.
3. **Banco PostgreSQL no Supabase:** armazenamento dos dados relacionais.

Mencione também:

- O backend é organizado em rotas e serviços.
- Existe uma integração de telemetria com Node-RED.
- QR Code e RFID estão previstos como evoluções futuras.

### Parte 4 — Perfis de acesso (1 minuto)

Apresente os perfis:

- **Público:** envia sugestões de manutenção sem login.
- **Coordenação:** realiza cadastros, atribuições e alocações.
- **Secretaria:** consulta dados e mantém turmas e docentes conforme a permissão.
- **Docente:** consulta alocações e solicita ambientes.
- **Manutenção:** analisa sugestões e direciona atendimentos.

Explique:

> Os perfis fazem parte da organização da solução, mas a autenticação e a autorização devem ser validadas no backend para evitar que o usuário acesse funções fora de sua responsabilidade.

### Parte 5 — Demonstração da página inicial (1 minuto 30 segundos)

Navegue para a página inicial do sistema.

Destaque:

- Identidade visual do SGA.
- Lista de aulas e ambientes em andamento.
- Atualização do horário atual.
- Indicador de ambiente alocado.
- Acesso rápido à sugestão de manutenção.
- Botão de login para os perfis internos.

**Frase sugerida:**

> Na página inicial, o usuário visualiza os ambientes que estão ocupados no momento. Um usuário externo também encontra facilmente o canal público para informar um problema.

### Parte 6 — Demonstração dos cadastros e alocações (2 minutos)

Faça login com o perfil de Coordenação.

Demonstre os principais fluxos:

1. Cadastro ou consulta de turma e docente.
2. Atribuição de uma aula.
3. Alocação de ambiente.
4. Consulta do relatório correspondente.

Durante a demonstração, explique:

- Turmas estão relacionadas a cursos e componentes curriculares.
- Uma atribuição relaciona turma, componente e docente.
- Uma alocação relaciona a atribuição ao ambiente, período e horário.
- Os dados são armazenados no banco relacional.
- Relatórios permitem consultar ambientes, turmas e alocações.

**Frase sugerida:**

> O sistema transforma dados separados em uma relação clara: turma, aula, docente, ambiente, dia e horário.

### Parte 7 — Demonstração da sugestão pública (2 minutos)

Volte à página inicial e selecione “Sugestão de manutenção”.

Preencha ou apresente um exemplo com:

- Nome do solicitante.
- Ambiente.
- Descrição do problema.

Envie a sugestão.

Explique:

> Qualquer usuário pode enviar uma sugestão sem realizar login. Porém, a sugestão não é criada automaticamente como uma ocorrência oficial de manutenção.

**Destaque a separação entre:**

- **Sugestão:** comunicação de um possível problema.
- **Ocorrência:** atendimento oficial criado após a análise e aprovação da manutenção.

### Parte 8 — Triagem e direcionamento (1 minuto 30 segundos)

Faça login ou navegue como usuário de Manutenção.

Acesse “Direcionamento de manutenção”.

Mostre:

- A quantidade de sugestões recebidas.
- O estado Pendente.
- Os dados do solicitante e do ambiente.
- A alteração para Em análise.
- O campo de comentário do direcionamento.
- A possibilidade de concluir ou manter o atendimento.

Explique:

> O setor responsável avalia se o problema existe, se as informações são suficientes e se a solicitação realmente pertence à manutenção. Depois, pode aprovar, rejeitar ou encaminhar o atendimento.

Ainda não implementado no nível completo:

- Conversão formal da sugestão em ocorrência.
- Prioridade definida.
- Responsável pelo atendimento.
- Histórico completo.
- Cálculo completo de SLA.

Esses recursos devem ser apresentados como evolução planejada, não como funcionalidade já concluída.

### Parte 9 — Tecnologias e arquitetura (1 minuto)

Apresente brevemente:

- **React:** interface web.
- **JavaScript:** desenvolvimento frontend e backend.
- **Node.js e Express:** API REST.
- **Supabase:** banco PostgreSQL e integração.
- **Node-RED:** telemetria.
- **React Router:** navegação entre páginas.
- **Jest e Testing Library:** testes frontend.
- **Vercel e Render:** planejamento de hospedagem.

Explique a arquitetura:

> A interface envia requisições para a API. A API aplica as regras e realiza operações no Supabase. Assim, frontend e banco ficam separados e as regras podem ser centralizadas no backend.

### Parte 10 — Próximos passos e encerramento (1 minuto)

Apresente os próximos passos conforme o plano:

1. Implementar autenticação segura.
2. Criar autorização por perfil no backend.
3. Formalizar reservas por data e horário.
4. Impedir reservas concorrentes.
5. Criar ocorrência oficial de manutenção.
6. Implementar histórico e SLA.
7. Adicionar QR Code e avaliar RFID.
8. Ampliar testes e preparação para produção.

Faça o fechamento:

> O SGA busca transformar a gestão dos ambientes em um processo centralizado, consultável e rastreável. A solução já possui uma base integrada de cadastros, alocações, sugestões, relatórios e telemetria, e continuará evoluindo para incluir reservas, segurança avançada, ocorrências completas e indicadores de manutenção.

Finalize:

> Obrigado pela atenção. Estamos disponíveis para responder às perguntas.

## 4. Sugestão para perguntas frequentes

### Como o sistema controla os ambientes disponíveis?

A base atual registra alocações e ambientes. A evolução planejada inclui uma validação automática por sala, data e horário, impedindo ambientes ocupados ou em manutenção.

### Qual a diferença entre sugestão e ocorrência?

Sugestão é uma comunicação pública de um possível problema. Ocorrência é o registro oficial criado pela manutenção após análise e aprovação.

### Por que o sistema usa React e Express?

React permite criar uma interface organizada por componentes. Express organiza a API em rotas e serviços, facilitando integração e manutenção.

### Por que usar Supabase?

O Supabase oferece PostgreSQL gerenciado, integração por API e recursos de segurança e armazenamento que podem ser utilizados pela aplicação.

### Como o sistema mede SLA?

Na fase atual, o SLA completo ainda não está aplicado. A evolução definida no plano será calcular tempos a partir da aprovação da ocorrência, evitando contar o período de triagem como atendimento.

### RFID já está implementado?

Não. O RFID está planejado como evolução conforme viabilidade técnica e financeira. QR Code é uma alternativa inicial mais simples para identificação e checklist patrimonial.

### O login atual é definitivo?

Não. A etapa atual possui uma implementação funcional de acesso por perfil. O plano prevê substituí-lo por autenticação segura e controle de autorização no backend.

## 5. Pontos importantes para evitar afirmações incorretas

- Não afirmar que reservas completas já estão prontas se elas ainda não estiverem implementadas.
- Não afirmar que RFID já está integrado ao sistema.
- Não afirmar que fotos já podem ser enviadas se o recurso ainda não estiver disponível.
- Não afirmar que autenticação segura já existe se o login ainda utiliza dados locais.
- Não afirmar que o SLA está completo se os cálculos ainda não estiverem implementados.
- Apresentar o projeto como um sistema em evolução, com uma base já funcional e funcionalidades planejadas.

## 6. Divisão sugerida entre integrantes

| Integrante | Parte da apresentação |
|---|---|
| Integrante 1 | Abertura, contexto e objetivos |
| Integrante 2 | Visão geral, perfis e arquitetura |
| Integrante 3 | Demonstração da página inicial |
| Integrante 4 | Demonstração de cadastro e alocação |
| Integrante 5 | Demonstração da sugestão pública |
| Integrante 6 | Triagem, próximos passos e perguntas |

Essa divisão pode ser ajustada conforme o número de participantes e o domínio de cada integrante.

## 7. Duração alternativa

- Apresentação rápida: 10 minutos.
- Apresentação padrão: 12 minutos.
- Apresentação com perguntas: 15 minutos.

Para atingir cerca de 15 minutos, aumentar a demonstração dos relatórios e explicar o modelo de dados, o estado atual do projeto e as etapas futuras com mais detalhes.