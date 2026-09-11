# 📘 SGA — Explicação dos Casos de Uso

## 1. Sobre o sistema

O **SGA — Sistema de Gestão de Ambientes** tem como objetivo centralizar e facilitar a gestão dos espaços físicos da instituição, envolvendo salas, turmas, docentes, horários, reservas e manutenção.

O sistema possui diferentes perfis de acesso. **Secretaria, Coordenação, Docente e Manutenção** utilizam a área autenticada do sistema, enquanto o **Público** possui acesso apenas à funcionalidade de sugestão de manutenção, sem necessidade de login.

## 2. O que é um Caso de Uso?

Um **Caso de Uso** representa uma funcionalidade que o sistema oferece para um determinado usuário ou ator.

Ele mostra:
- **Quem** utiliza a funcionalidade;
- **O que** o usuário pode fazer;
- Como ocorre a interação com o sistema;
- Qual resultado é esperado.

### Exemplo
> **Docente → Reservar Sala**

- **Ator:** Docente
- **Caso de Uso:** Reservar Sala
- **Objetivo:** Permitir que o docente reserve um ambiente disponível.

---

# 3. Atores do SGA

| Ator | Descrição |
|---|---|
| 👔 Coordenação | Funções administrativas, atribuições e alocação de ambientes. |
| 🗂️ Secretaria | Cadastros e consultas administrativas. |
| 👨‍🏫 Docente | Consulta suas alocações e realiza reservas. |
| 🔧 Manutenção | Analisa solicitações e acompanha ocorrências. |
| 🌐 Público | Envia solicitação de manutenção sem login. |

---

# 4. Autenticação

## UC01 — Realizar Login

**Atores:** Secretaria, Coordenação, Docente e Manutenção.

### Objetivo
Permitir que usuários autorizados acessem as funcionalidades correspondentes ao seu perfil.

### Fluxo
1. Usuário acessa a tela de login.
2. Informa as credenciais.
3. Sistema valida os dados.
4. Sistema identifica o perfil.
5. Sistema libera as funcionalidades permitidas.

> O Público não realiza login para enviar uma solicitação de manutenção.

---

# 5. Casos de Uso da Secretaria

## UC02 — Cadastrar Turma

**Ator:** Secretaria.

Permite cadastrar uma turma no sistema.

**Fluxo:** acessar cadastro → informar dados → validar → registrar → confirmar.

## UC03 — Cadastrar Docente

**Ator:** Secretaria.

Permite cadastrar docentes no sistema.

**Fluxo:** acessar cadastro → informar dados → validar → registrar → confirmar.

## UC04 — Consultar Relatórios

**Ator:** Secretaria.

Permite consultar informações administrativas e de utilização dos ambientes, utilizando filtros quando necessário.

---

# 6. Casos de Uso da Coordenação

## UC05 — Realizar Atribuição

**Ator:** Coordenação.

Permite relacionar **turma, docente e disciplina**.

**Fluxo:**
1. Acessar atribuições.
2. Selecionar turma.
3. Selecionar docente.
4. Selecionar disciplina.
5. Validar informações.
6. Registrar atribuição.

## UC06 — Alocar Ambiente

**Ator:** Coordenação.

Permite relacionar uma aula/turma a um ambiente, considerando horário e disponibilidade.

**Fluxo:** selecionar aula/turma → selecionar ambiente → consultar horário → verificar disponibilidade → registrar alocação.

## UC07 — Cadastrar Turma

**Ator:** Coordenação.

A Coordenação também possui permissão para cadastrar turmas.

## UC08 — Cadastrar Docente

**Ator:** Coordenação.

A Coordenação também possui permissão para cadastrar docentes.

## UC09 — Consultar Relatórios

**Ator:** Coordenação.

Permite consultar relatórios relacionados à utilização e organização dos ambientes.

---

# 7. Casos de Uso do Docente

## UC10 — Consultar Alocação

**Ator:** Docente.

Permite consultar as aulas e ambientes associados ao docente.

## UC11 — Consultar Salas Disponíveis

**Ator:** Docente.

Permite verificar quais salas estão disponíveis em determinado período.

## UC12 — Filtrar Salas e Horários

**Ator:** Docente.

Permite facilitar a busca por ambientes utilizando critérios como sala, data e horário.

## UC13 — Reservar Sala

**Ator:** Docente.

### Objetivo
Permitir que o docente reserve um ambiente.

### Dados da reserva
- Sala
- Data
- Horário
- Docente
- NIF
- Finalidade
- Turma, quando aplicável

### Fluxo
1. Docente acessa a reserva.
2. Seleciona a sala.
3. Seleciona data e horário.
4. Sistema verifica o status da sala.
5. Docente informa os dados necessários.
6. Sistema revalida a disponibilidade.
7. Se disponível, registra a reserva.
8. Sistema confirma a reserva.

### Regra importante
A disponibilidade deve ser revalidada no momento da confirmação para evitar conflitos de reservas simultâneas.

## UC14 — Consultar Relatórios

**Ator:** Docente.

Permite consultar informações disponibilizadas pelo sistema relacionadas às suas atividades e ambientes.

---

# 8. Casos de Uso da Manutenção

## UC15 — Visualizar Solicitações

**Ator:** Manutenção.

Permite visualizar as solicitações enviadas pelo público e seus respectivos detalhes.

## UC16 — Avaliar Solicitação

**Ator:** Manutenção.

Permite analisar se uma solicitação representa um problema válido de manutenção.

A análise pode considerar:
- Existência do problema;
- Informações suficientes;
- Local correto;
- Tipo da ocorrência;
- Prioridade;
- Necessidade de inspeção;
- Recursos necessários.

Após a análise, a solicitação pode ser **aprovada ou não aprovada**.

## UC17 — Aceitar Solicitação

**Ator:** Manutenção.

Representa a aprovação da solicitação após a análise. A solicitação aprovada pode gerar uma ocorrência/ordem de serviço.

## UC18 — Recusar Solicitação

**Ator:** Manutenção.

Representa a não aprovação da solicitação. O resultado da análise deve ser registrado.

## UC19 — Gerar Ordem de Serviço

**Ator:** Manutenção.

Quando uma solicitação é aprovada, o sistema pode criar o registro oficial de manutenção.

**Fluxo:** solicitação aprovada → criar ocorrência/OS → registrar informações → disponibilizar para atendimento.

## UC20 — Visualizar Ordem de Serviço

**Ator:** Manutenção.

Permite consultar dados da ordem de serviço, como descrição, local, prioridade, responsável e situação.

## UC21 — Alterar Status da OS

**Ator:** Manutenção.

Permite acompanhar a evolução do atendimento.

### Status previstos
- Pendente de análise
- Não aprovada
- Aprovada
- Em atendimento
- Finalizada

A alteração deve ser registrada no histórico da manutenção.

## UC22 — Consultar Indicadores e SLA

**Ator:** Manutenção.

Permite acompanhar indicadores de atendimento, como:
- Tempo de resposta;
- Tempo até o início;
- Tempo de solução;
- Tempo total;
- SLA cumprido;
- SLA excedido.

---

# 9. Caso de Uso do Público

## UC23 — Enviar Solicitação de Manutenção

**Ator:** Público.

### Objetivo
Permitir que qualquer pessoa comunique um possível problema identificado em uma sala ou ambiente.

### Importante
O Público **não precisa realizar login**.

### Dados que podem ser enviados
- Nome;
- E-mail ou contato;
- Local/sala;
- Descrição do problema;
- Tipo de ocorrência;
- Data e hora;
- Foto opcional;
- Observações.

### Fluxo
1. Usuário acessa a página principal.
2. Seleciona **Sugerir Manutenção**.
3. Preenche o formulário.
4. Envia a solicitação.
5. Sistema registra a solicitação.
6. Manutenção recebe para análise.

---

# 10. Regra de Negócio — Solicitação x Ocorrência

A solicitação enviada pelo público representa apenas uma **comunicação de um possível problema**.

Ela **não é automaticamente uma ocorrência oficial**.

O fluxo é:

```text
Público
   ↓
Enviar Solicitação
   ↓
Recebimento
   ↓
Triagem da Manutenção
   ↓
 ┌───────────────┐
 │               │
 ▼               ▼
Não aprovada   Aprovada
 │               │
 ▼               ▼
Registro       Ocorrência /
da análise     Ordem de Serviço
                 │
                 ▼
              Atendimento
                 │
                 ▼
              Finalização
```

Essa separação evita que relatos não confirmados sejam contabilizados como problemas reais de manutenção.

---

# 11. Resumo dos Casos de Uso

| ID | Caso de Uso | Ator |
|---|---|---|
| UC01 | Realizar Login | Secretaria, Coordenação, Docente, Manutenção |
| UC02 | Cadastrar Turma | Secretaria |
| UC03 | Cadastrar Docente | Secretaria |
| UC04 | Consultar Relatórios | Secretaria |
| UC05 | Realizar Atribuição | Coordenação |
| UC06 | Alocar Ambiente | Coordenação |
| UC07 | Cadastrar Turma | Coordenação |
| UC08 | Cadastrar Docente | Coordenação |
| UC09 | Consultar Relatórios | Coordenação |
| UC10 | Consultar Alocação | Docente |
| UC11 | Consultar Salas Disponíveis | Docente |
| UC12 | Filtrar Salas e Horários | Docente |
| UC13 | Reservar Sala | Docente |
| UC14 | Consultar Relatórios | Docente |
| UC15 | Visualizar Solicitações | Manutenção |
| UC16 | Avaliar Solicitação | Manutenção |
| UC17 | Aceitar Solicitação | Manutenção |
| UC18 | Recusar Solicitação | Manutenção |
| UC19 | Gerar Ordem de Serviço | Manutenção |
| UC20 | Visualizar Ordem de Serviço | Manutenção |
| UC21 | Alterar Status da OS | Manutenção |
| UC22 | Consultar Indicadores e SLA | Manutenção |
| UC23 | Enviar Solicitação de Manutenção | Público |

---

# 12. Relação entre os principais atores

```text
Secretaria ───────► Cadastros / Relatórios

Coordenação ──────► Atribuição / Alocação / Cadastros / Relatórios

Docente ───────────► Consulta / Reserva / Relatórios

Manutenção ────────► Solicitações / Avaliação / OS / SLA

Público ───────────► Solicitação de Manutenção
                          │
                          ▼
                     Manutenção
                          │
                  ┌───────┴───────┐
                  ▼               ▼
              Recusada         Aprovada
                                  │
                                  ▼
                          Ordem de Serviço
                                  │
                                  ▼
                             Atendimento
                                  │
                                  ▼
                             Finalização
```

## 13. Observação para UML

No **Diagrama de Casos de Uso**, os atores ficam fora do limite do sistema e os casos de uso ficam dentro do retângulo que representa o SGA.

No **Diagrama de Sequência**, deve ser mostrado o passo a passo da interação entre:

**Ator → Interface → Sistema → Banco de Dados**

Exemplo:

```text
Docente
   ↓
Tela de Reserva
   ↓
Sistema
   ↓
Verifica disponibilidade
   ↓
Banco de Dados
   ↓
Sistema
   ↓
Confirma reserva
   ↓
Docente
```

Este documento serve como base para os diagramas de **Casos de Uso** e **Sequência** do projeto SGA.
