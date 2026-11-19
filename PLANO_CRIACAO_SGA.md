# Plano de Criação do SGA — Sistema de Gestão de Ambientes

**Projeto:** SGA — Sistema de Gestão de Ambientes  
**Versão do plano:** 1.0  
**Contexto:** planejamento da evolução de uma solução já iniciada para gestão de ambientes, alocações, reservas, manutenção e indicadores

## 1. Visão geral

O SGA centraliza a gestão dos espaços físicos de uma instituição. O sistema deve permitir o cadastro e a consulta de ambientes, turmas, docentes e componentes curriculares; a atribuição e alocação de aulas; o controle de disponibilidade e reservas; o registro público de problemas de manutenção; a triagem de solicitações; o acompanhamento de ocorrências, SLA e relatórios.

A solução será apresentada como uma aplicação web composta por uma interface React, uma API REST em Node.js/Express e um banco PostgreSQL gerenciado pelo Supabase. Recursos adicionais incluem integrações de telemetria com Node-RED e possibilidades futuras de QR Code e RFID.

## 2. Objetivos

### Objetivo geral

Criar uma plataforma integrada, segura e fácil de usar para organizar a utilização dos ambientes da instituição e agilizar a resposta a problemas de infraestrutura.

### Objetivos específicos

- Centralizar dados de salas, turmas, docentes e alocações.
- Evitar conflitos de uso mediante validações de disponibilidade.
- Permitir que perfis autorizados executem ações administrativas.
- Disponibilizar um canal público simples para sugestão de manutenção.
- Separar sugestões de ocorrências oficiais de manutenção.
- Registrar o histórico completo das solicitações e atendimentos.
- Medir tempo de resposta, atendimento, solução e cumprimento de SLA.
- Disponibilizar relatórios para tomada de decisão.
- Evoluir gradualmente para controle patrimonial por QR Code e RFID.
- Separar dados operacionais e integrações de telemetria conforme necessário.

## 3. Necessidades a serem atendidas

### 3.1 Necessidades essenciais

| Código | Necessidade | Resultado esperado |
|---|---|---|
| RE-01 | Identificar perfis autorizados | Coordenação, Secretaria, Docente e Manutenção acessam somente as funções pertinentes |
| RE-02 | Cadastrar docentes | Permitir consulta e manutenção dos dados docentes |
| RE-03 | Cadastrar turmas | Relacionar cursos, componentes curriculares, docentes e carga horária |
| RE-04 | Cadastrar ambientes | Registrar código, nome, tipo, local, capacidade e status |
| RE-05 | Controlar horários | Representar turnos, períodos e intervalos de aulas |
| RE-06 | Alocar ambientes | Relacionar aula, turma, docente, ambiente, período e horário |
| RE-07 | Consultar disponibilidade | Informar se o ambiente está livre, ocupado ou em manutenção |
| RE-08 | Emitir relatórios | Filtrar informações por sala, turma, docente, período e status |
| RE-09 | Operar em ambiente web | Acesso responsivo por navegador a partir de computador ou dispositivo móvel |

### 3.2 Necessidades de reserva

- Selecionar sala, data e horário.
- Consultar o status antes da confirmação.
- Impedir reservas para salas ocupadas ou em manutenção.
- Validar novamente a disponibilidade no momento da confirmação.
- Registrar sala, data, horário, docente, NIF e finalidade.
- Permitir turma como informação opcional.
- Evitar reservas simultâneas conflitantes.
- Registrar cancelamento ou alteração da reserva.

### 3.3 Necessidades de manutenção

- Disponibilizar um formulário público sem login.
- Permitir nome, contato, ambiente, descrição, tipo, data, foto e observações.
- Receber sugestões em uma fila de triagem.
- Permitir que o setor de manutenção aprove ou rejeite uma sugestão.
- Registrar justificativa da análise e responsável pela decisão.
- Converter sugestões aprovadas em ocorrências oficiais.
- Classificar prioridade, tipo e responsável pelo atendimento.
- Registrar início, andamento, observações e conclusão.
- Controlar tempo de resposta, início, solução e SLA.
- Exibir indicadores por período, ambiente, tipo e responsável.

### 3.4 Necessidades patrimoniais e telemetria

- Criar checklist patrimonial por ambiente.
- Associar patrimônio a salas e identificadores quando necessário.
- Avaliar QR Code como alternativa inicial a RFID.
- Avaliar RFID quando houver viabilidade técnica e financeira.
- Integrar telemetria de máquinas por meio de API e Node-RED.
- Registrar estado, contadores, cargas e dados técnicos das máquinas.

## 4. Perfis de acesso

| Perfil | Responsabilidades |
|---|---|
| Público | Enviar sugestões de manutenção sem autenticação |
| Coordenação | Gerenciar docentes, turmas, ambientes, horários e alocações; consultar relatórios |
| Secretaria | Cadastrar docentes e turmas; consultar ambientes e relatórios |
| Docente | Consultar alocações, disponibilidade e realizar reservas |
| Manutenção | Triar sugestões, aprovar ou rejeitar solicitações, atender ocorrências e acompanhar SLA |

O controle de acesso deve ser validado no backend. O frontend apenas controla a experiência visual e não deve ser considerado uma barreira de segurança.

## 5. Tecnologias utilizadas

### Frontend

- React 19.
- Create React App/react-scripts 5.
- React Router DOM 6.
- JavaScript ES6+.
- CSS modular por página/componente.
- Fetch API para comunicação com o backend.
- Jest e Testing Library para testes.

### Backend principal

- Node.js.
- Express 5.
- Supabase JavaScript Client.
- CORS e dotenv.
- Nodemon para desenvolvimento.
- Arquitetura em rotas e serviços.
- Deploy compatível com Render.

### Banco de dados

- PostgreSQL via Supabase.
- Chaves primárias e estrangeiras.
- Restrições de integridade e índices.
- Views relacionais.
- Service role usada somente no backend.

### Telemetria

- API Express dedicada.
- Node-RED para fluxos de integração.
- Supabase para armazenamento dos registros.
- Relatórios de telemetria no frontend.

### Hospedagem

- Frontend preparado para Vercel.
- Backend preparado para Render.
- Variáveis de ambiente para chaves e URLs.
- Banco de dados preparado para Supabase.

### Tecnologias futuras

- QR Code para identificação de ambientes e checklist.
- RFID para identificação automática de patrimônio.
- Upload seguro de imagens, como alternativa ao armazenamento local.
- Mapa para localização dos ambientes.
- Filtro para busca da turma do aluno.

## 6. Conceitos e práticas aplicados

### Arquitetura

- **Arquitetura cliente-servidor:** frontend, API e banco possuem responsabilidades distintas.
- **API REST:** operações HTTP organizadas por recursos.
- **Camadas:** rotas recebem requisições, serviços concentram regras e persistência, e o banco mantém os dados.
- **Integração:** telemetria deve ser isolada em backend próprio ou em um módulo independente.

### Modelagem de dados

- Modelo relacional normalizado.
- Integridade referencial por meio de chaves estrangeiras.
- Regras de consistência no banco e na aplicação.
- Views para consultas consolidadas.
- Registro de histórico em vez de sobrescrever etapas importantes.

### Regras de negócio

- **Sugestão ≠ ocorrência:** sugestões públicas não geram automaticamente manutenção.
- **Máquina de estados:** os registros passam por estados definidos e transições válidas.
- **Validação concorrente:** disponibilidade deve ser consultada novamente na confirmação.
- **SLA orientado à aprovação:** o tempo de atendimento começa depois da validação da solicitação.
- **Separação de responsabilidades:** cada perfil recebe ações compatíveis com sua função.

### Desenvolvimento

- Componentização no React.
- Reutilização de estilos e chamadas à API.
- Versionamento por Git.
- Variáveis de ambiente para configuração.
- Validação de entradas no backend.
- Tratamento centralizado de erros.
- Testes unitários e testes de integração.
- Tratamento de fusos horários, especialmente para datas e horas de manutenção.

### Segurança

- Autenticação real substituindo credenciais armazenadas em arquivos públicos.
- Senhas protegidas por hashing.
- Controle de acesso baseado em perfis no backend.
- Proteção das credenciais de serviço.
- Validação contra dados inválidos ou maliciosos.
- Uso futuro de HTTPS, RLS e políticas específicas no Supabase.
- Limitação de abuso no formulário público.

## 7. Estratégia de criação

A criação será feita de forma incremental. Cada etapa deverá produzir uma versão utilizável e validada antes da evolução seguinte.

### Fase 1 — Levantamento e alinhamento

**Objetivo:** confirmar necessidades e expectativas.

- Validar os processos atuais de coordenação, secretaria e manutenção.
- Mapear ambientes, turmas, docentes e responsáveis.
- Identificar campos obrigatórios e regras de uso.
- Definir estados de reservas e manutenções.
- Confirmar requisitos de relatório e SLA.
- Definir critérios de aceite.

**Entregável:** escopo aprovado, fluxos validados e lista de prioridades.

### Fase 2 — Modelagem

**Objetivo:** estabelecer a estrutura da solução.

- Consolidar o modelo relacional atual.
- Criar ou revisar tabelas de usuários, perfis e ambientes.
- Modelar reservas e alocações por data e horário.
- Modelar sugestões, ocorrências, responsáveis e histórico.
- Definir prioridades, tipos e estados de manutenção.
- Criar diagramas de caso de uso, entidade-relacionamento e sequência.

**Entregável:** modelo de dados, arquitetura e fluxos aprovados.

### Fase 3 — Consolidação dos cadastros

**Objetivo:** estabilizar as funcionalidades essenciais já presentes.

- Concluir cadastros de docentes e turmas.
- Concluir cadastro e consulta de ambientes.
- Concluir atribuições de aulas e componentes curriculares.
- Implementar validações de unicidade e integridade.
- Unificar estilos e navegação.
- Consolidar chamadas REST e tratamento de erros.

**Entregável:** módulo acadêmico funcional e integrado ao banco.

### Fase 4 — Alocação e reserva

**Objetivo:** controlar a ocupação dos ambientes.

- Implementar consulta de disponibilidade por data e horário.
- Criar reserva com dados do docente e finalidade.
- Bloquear ambientes ocupados ou em manutenção.
- Executar validação final no backend.
- Prevenir conflitos simultâneos.
- Disponibilizar cancelamento e relatórios de alocação.

**Entregável:** fluxo completo de alocação e reserva.

### Fase 5 — Canal público de manutenção

**Objetivo:** facilitar o relato de problemas sem prejudicar o fluxo administrativo.

- Disponibilizar botão público na página inicial.
- Criar formulário com validação.
- Registrar sugestões separadas das ocorrências.
- Adicionar proteção básica contra abuso.
- Permitir anexos ou fotos em armazenamento adequado.

**Entregável:** canal público enviando solicitações para a fila de triagem.

### Fase 6 — Triagem e ocorrências

**Objetivo:** transformar problemas validados em atendimentos controlados.

- Criar fila de sugestões pendentes.
- Permitir aprovação, rejeição e registro da análise.
- Converter sugestões aprovadas em ocorrências.
- Definir responsável, prioridade e previsão.
- Registrar etapas, observações e finalização.
- Implementar histórico completo.

**Entregável:** módulo completo de manutenção.

### Fase 7 — Indicadores e SLA

**Objetivo:** medir a eficiência do atendimento.

- Calcular tempo de resposta, início, solução e duração total.
- Calcular SLA cumprido e excedido.
- Exibir total de sugestões, aprovações e rejeições.
- Identificar ambientes e tipos de problema recorrentes.
- Criar filtros por período, responsável e prioridade.
- Gerar relatórios exportáveis.

**Entregável:** painel de indicadores e relatórios gerenciais.

### Fase 8 — Controle patrimonial

**Objetivo:** ampliar o controle dos itens presentes nos ambientes.

- Criar cadastro de patrimônio.
- Associar itens às salas.
- Disponibilizar checklist por ambiente.
- Implementar acesso por QR Code.
- Avaliar RFID mediante estudo de viabilidade.

**Entregável:** MVP patrimonial com checklist e identificadores.

### Fase 9 — Segurança e preparação para produção

**Objetivo:** reduzir riscos antes da implantação definitiva.

- Substituir login público por autenticação segura.
- Definir políticas de autorização no backend e no banco.
- Configurar variáveis de ambiente em Vercel e Render.
- Ativar logs e monitoramento.
- Definir backup e recuperação.
- Revisar dependências e vulnerabilidades.
- Validar limites de acesso e privacidade.

**Entregável:** solução pronta para homologação e implantação.

### Fase 10 — Testes e validação

**Objetivo:** garantir que regras e fluxos funcionam corretamente.

- Testes unitários de regras e formatação.
- Testes de integração das APIs.
- Testes de disponibilidade e conflito de reservas.
- Testes de perfis e autorização.
- Testes da triagem e de transições de estado.
- Testes de cálculo de SLA.
- Testes de responsividade.
- Testes com usuários reais.

**Entregável:** relatório de testes, correções e validação dos critérios de aceite.

## 8. Estado atual e lacunas previstas

Com base na estrutura atual do projeto, já existem módulos de frontend e backend para:

- Login.
- Cadastro de turmas e docentes.
- Atribuição de aulas.
- Ambiente e alocação.
- Sugestão pública de manutenção.
- Direcionamento e relatório de manutenção.
- Relatórios de ambientes, turmas e alocações.
- Telemetria de máquinas.

Principais lacunas que devem ser tratadas no plano:

- Substituir login baseado em arquivo JSON por autenticação segura.
- Definir autorização por perfil no backend.
- Formalizar o modelo completo de reservas.
- Impedir reservas concorrentes com validação transacional.
- Definir estados e histórico completos das ocorrências.
- Implementar métricas de SLA completas.
- Definir upload seguro de fotos.
- Implementar ou avaliar QR Code e RFID.
- Criar suíte de testes mais ampla.
- Revisar publicação, variáveis de ambiente e monitoramento.

## 9. Estrutura sugerida do sistema

```text
front-end React
├── Página pública
├── Login
├── Painel por perfil
├── Cadastro e consulta
├── Reservas e disponibilidade
├── Sugestão de manutenção
├── Triagem e ocorrências
├── Relatórios
└── Telemetria

back-end Express
├── Rotas REST
├── Serviços de negócio
├── Supabase
├── Validação e autorização
├── Integração de telemetria
└── Middleware de erros

banco PostgreSQL/Supabase
├── Usuários e perfis
├── Docentes e turmas
├── Ambientes e patrimônios
├── Atribuições e alocações
├── Reservas
├── Sugestões e ocorrências
├── Histórico e timestamps
└── Dados de telemetria

integrações
├── Node-RED
├── QR Code
└── RFID
```

## 10. Fluxos principais

### Fluxo de alocação

```text
Selecionar ambiente
  → Selecionar data e horário
  → Consultar disponibilidade
  → Informar docente, turma opcional e finalidade
  → Confirmar reserva
  → Validar novamente no backend
  → Registrar alocação ou informar conflito
```

### Fluxo de manutenção

```text
Usuário acessa "Sugerir manutenção"
  → Preenche o formulário
  → Envia a sugestão
  → Sugestão fica pendente de análise
  → Manutenção analisa o problema
  → Aprova ou não aprova
  → Sugestão aprovada vira ocorrência
  → Ocorrência recebe responsável e prioridade
  → Atendimento é iniciado e registrado
  → Problema é finalizado
  → Histórico e SLA são atualizados
```

## 11. Métricas de sucesso

- Redução de conflitos de reserva.
- Redução do tempo de triagem das sugestões.
- Redução do tempo médio de solução.
- Aumento do percentual de SLA cumprido.
- Maior rastreabilidade das ocorrências.
- Menor tempo para localizar ambientes disponíveis.
- Maior visibilidade sobre ambientes e tipos com recorrência de problemas.
- Utilização correta dos recursos por perfil.
- Disponibilidade estável da aplicação em produção.

## 12. Plano de entrega

| Etapa | Entrega principal | Critério de conclusão |
|---|---|---|
| 1 | Escopo e modelos validados | Requisitos e perfis aprovados |
| 2 | Cadastros consolidados | CRUD essencial integrado ao banco |
| 3 | Reserva de ambiente | Bloqueio e validação sem conflito |
| 4 | Canal público | Sugestões registradas sem login |
| 5 | Manutenção | Triagem, ocorrência e histórico operacionais |
| 6 | SLA e indicadores | Métricas calculadas e validadas |
| 7 | Patrimônio | Checklist ou QR Code utilizável |
| 8 | Produção | Segurança, deploy, backup e testes concluídos |

## 13. Recomendações iniciais

- Priorizar as necessidades essenciais antes de RFID e recursos avançados.
- Tratar autorização e autenticação como requisitos de base.
- Evitar adicionar campos fora do modelo relacional sem análise.
- Implementar as regras de disponibilidade no backend.
- Manter sugestão pública separada de ocorrência oficial.
- Usar uma máquina de estados clara para manutenção.
- Registrar todos os eventos relevantes com data e responsável.
- Executar testes incrementais em cada fase.
- Validar o sistema com representantes de coordenação, secretaria, docentes e manutenção.

## 14. Resultado esperado

Ao final do plano, o SGA deverá ser uma solução integrada para controlar ambientes, turmas, docentes, alocações, reservas, patrimônio e manutenção. A instituição terá maior controle da disponibilidade dos espaços, um canal público acessível para comunicação de problemas e uma visão gerencial baseada em indicadores e SLA.