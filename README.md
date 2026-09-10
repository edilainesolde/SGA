# 🏢 Projeto — SGA: Sistema de Gestão de Ambientes

> **Sistema de Gestão de Ambientes | Organização • Controle • Eficiência**

**👥 Nome provisório do grupo:** 30+
**📅 Reunião de definição do escopo:** 08/09/2026
**🎓 Etapa:** Segundo semestre
**📄 Documento:** Escopo inicial — Versão 01

---

## 👥 Participantes

* **Bianca Cirilo**
* **Edilaine Paulino**
* **Fabio Bitencourt**
* **Guilherme Leite**
* **Ronaldo Soares**

---

# 🎯 1. Contexto

O projeto **SGA – Sistema de Gestão de Ambientes** tem como objetivo aperfeiçoar a solução desenvolvida no primeiro semestre, ampliando suas funcionalidades para facilitar a **gestão, ocupação, consulta, reserva e manutenção dos espaços físicos da instituição**.

A proposta é centralizar as informações sobre **salas, turmas, docentes, horários, reservas, patrimônio e manutenção**, proporcionando maior organização, controle e eficiência na utilização dos ambientes.

---

# 🚀 2. Objetivo Geral

Desenvolver uma solução para gerenciamento dos espaços físicos, permitindo:

* 🏫 Cadastro de salas, turmas e docentes;
* 📅 Alocação de aulas e ambientes;
* 🔎 Consulta da disponibilidade das salas;
* 📌 Controle e reserva de ambientes;
* 📊 Relatórios de utilização;
* 🏷️ Controle patrimonial por **RFID e/ou QR Code**;
* 🔧 Registro e acompanhamento de ocorrências de manutenção;
* ⏱️ Monitoramento de **SLA** e indicadores.

> **Objetivo central:** tornar a gestão dos ambientes mais organizada, integrada e eficiente.

---

# 🔐 3. Perfis de Acesso

## 👔 Coordenação

Responsável pelas principais funções administrativas:

* Cadastrar docentes, turmas e salas;
* Gerenciar horários;
* Alocar salas;
* Relacionar aula, turma, docente, sala e horário;
* Consultar relatórios de utilização.

---

## 🗂️ Secretaria

Poderá:

* Cadastrar docentes e turmas;
* Consultar disponibilidade e utilização das salas;
* Pesquisar informações por sala, turma, docente e período.

---

## 👨‍🏫 Docente

Poderá:

* Consultar sua alocação;
* Consultar salas disponíveis;
* Filtrar salas e horários;
* Realizar reservas de ambientes.

A reserva deverá considerar:

**Sala + Data + Horário + Docente + NIF + Finalidade**

> ℹ️ **Observação:** a informação de turma será opcional.

---

## 🔧 Manutenção

Módulo previsto como alternativa caso a implantação do RFID não seja viável dentro do prazo.

---

# ⚙️ 4. Funcionalidades Principais

## 🏫 Gestão de Salas

* Cadastro de salas;
* Cadastro de turmas;
* Cadastro de docentes;
* Controle de horários;
* Alocação de ambientes;
* Consulta de disponibilidade;
* Relatório central de utilização.

---

## 📅 Reserva de Salas

### 🔄 Fluxo da Reserva

**Selecionar sala**
↓
**Selecionar data**
↓
**Selecionar horário**
↓
**🔎 Verificar status da sala**
↓
**Informar dados**
↓
**✅ Confirmar reserva**

Após a seleção da **data e do horário**, o sistema deverá consultar automaticamente o status da sala.

### 📊 Status da Sala

|        Status        | Situação                                   | Ação do sistema                    |
| :------------------: | ------------------------------------------ | ---------------------------------- |
|     🟢 **LIVRE**     | Sala disponível para o horário selecionado | ✅ Permitir continuar com a reserva |
|    🔴 **OCUPADA**    | Sala possui reserva ou alocação no horário | 🚫 Bloquear nova reserva           |
| 🟠 **EM MANUTENÇÃO** | Sala indisponível para utilização          | 🚫 Bloquear nova reserva           |

### 🟢 Sala Livre

Quando a sala estiver disponível:

> **Status: 🟢 LIVRE**
> A sala está disponível para o horário selecionado.
> **O usuário poderá prosseguir com a reserva.**

---

### 🔴 Sala Ocupada

Quando existir uma reserva ou alocação:

> **Status: 🔴 OCUPADA**
> A sala já possui uma reserva ou alocação para este horário.
> **Não será possível realizar uma nova reserva.**

---

### 🟠 Sala em Manutenção

Quando a sala estiver indisponível para manutenção:

> **Status: 🟠 EM MANUTENÇÃO**
> Esta sala está indisponível devido a uma manutenção programada ou ocorrência em andamento.
> **Não será possível realizar uma reserva.**

---

### 🔒 Validação da Reserva

O sistema deverá realizar uma **nova validação da disponibilidade no momento da confirmação da reserva**, evitando conflitos ou reservas simultâneas para o mesmo ambiente, data e horário.

A reserva deverá considerar:

**Sala + Data + Horário + Docente + NIF + Finalidade**

> ℹ️ A informação de turma será opcional.

---

## 📊 Relatórios

Permitir consultas por:

* Sala;
* Turma;
* Docente;
* Período;
* Status.

As informações poderão incluir:

**Sala + Turma + Docente + Data + Horário + Status**

---

# 🏷️ 5. Controle Patrimonial

Será analisada a utilização de tecnologias para identificação e controle dos patrimônios existentes nos ambientes.

## 📡 RFID

Para identificação e controle dos patrimônios existentes nos ambientes.

## 📱 QR Code

Como alternativa ou complemento ao RFID, permitindo acessar um **checklist patrimonial por sala**.

### Exemplo — Sala 203

☑️ Computador
☑️ Projetor
☑️ Ar-condicionado
☑️ Mesa
☑️ Cadeiras
☑️ Quadro
☑️ Outros equipamentos

---

# 🔧 6. Módulo de Manutenção

Caso o RFID não seja viável, o projeto poderá priorizar o desenvolvimento do **Módulo de Manutenção**.

## 📝 Registro de Ocorrências

O usuário poderá registrar problemas, informando:

* 👤 Solicitante;
* 👥 Turma, quando aplicável;
* 📍 Local/sala;
* 📝 Descrição;
* 🕐 Data e hora;
* 📷 Foto opcional;
* ⚠️ Tipo de ocorrência.

### Exemplos de ocorrências

* 💧 Vazamento;
* ❄️ Ar-condicionado com defeito;
* 💡 Lâmpada queimada;
* 🖥️ Equipamento danificado;
* ⚡ Problemas elétricos;
* 🏗️ Problemas estruturais.

---

## 🔄 Fluxo de Atendimento

**📝 Solicitação aberta**
↓
**📥 Recebido**
↓
**🔧 Em andamento / Em manutenção**
↓
**✅ Finalizado**

O sistema deverá registrar o histórico de cada etapa, incluindo:

* Data;
* Hora;
* Responsável;
* Status da ocorrência.

---

# ⏱️ 7. SLA e Indicadores

O módulo de manutenção deverá permitir acompanhar:

* ⏱️ Tempo de resposta;
* ▶️ Tempo até o início do atendimento;
* 🛠️ Tempo de solução;
* ⌛ Tempo total;
* 🟢 SLA cumprido;
* 🔴 SLA excedido.

### 📈 Indicadores

Também poderão ser apresentados:

* Total de ocorrências;
* Ocorrências em andamento;
* Ocorrências finalizadas;
* Tempo médio de atendimento;
* Locais com maior número de ocorrências;
* Tipos de problemas mais recorrentes.

---

# ⭐ 8. Prioridades do Projeto

## 🥇 Prioridade 1 — Essencial

* Mapeamento dos espaços;
* Análise de requisitos;
* Login e controle de acesso;
* Cadastro de salas;
* Cadastro de docentes;
* Cadastro de turmas;
* Alocação de salas;
* Controle de horários;
* Relatório de utilização.

---

## 🥈 Prioridade 2 — Evolução

* 📅 Reserva de salas;
* 🔎 Verificação automática do status da sala;
* 🔒 Bloqueio de reserva para salas ocupadas;
* 🔧 Bloqueio de reserva para salas em manutenção;
* 🔍 Filtros;
* 📱 QR Code;
* ☑️ Checklist patrimonial.

---

## 🥉 Prioridade 3 — Conforme viabilidade

* 📡 RFID;
* 🏷️ Controle patrimonial;
* 🔧 Módulo de manutenção;
* 📚 Histórico de ocorrências;
* ⏱️ SLA;
* 📊 Indicadores;
* 📷 Upload de fotos.

---

# 🗺️ 9. Roadmap

### 🔹 Fase 1 — Levantamento

* Mapeamento;
* Processos;
* Requisitos;
* Validação.

### 🔹 Fase 2 — Modelagem

* Estrutura do sistema;
* Perfis;
* Banco de dados;
* Fluxos.

### 🔹 Fase 3 — Desenvolvimento

* Login;
* Perfis;
* Cadastros;
* Salas;
* Turmas;
* Docentes;
* Alocações;
* Reservas;
* Verificação de disponibilidade;
* Relatórios.

### 🔹 Fase 4 — Evoluções

* QR Code;
* Checklist;
* Estudo/implantação do RFID.

### 🔹 Fase 5 — Plano Alternativo

* Módulo de manutenção;
* Ocorrências;
* Atendimento;
* Histórico;
* SLA;
* Relatórios.

### 🔹 Fase 6 — Testes

* Testes funcionais;
* Testes de perfis;
* Testes de reservas;
* Testes de disponibilidade e conflitos;
* Testes de bloqueio de salas ocupadas;
* Testes de bloqueio de salas em manutenção;
* Testes de relatórios;
* Validação com usuários.

---

# 🏆 10. Resultado Esperado

Ao final do projeto, espera-se disponibilizar uma **solução integrada para facilitar a gestão dos ambientes da instituição**, proporcionando maior controle sobre utilização, disponibilidade, reservas, patrimônio e manutenção.

### 👔 Coordenação

**Administrar → Cadastrar → Alocar → Consultar → Gerar relatórios**

### 🗂️ Secretaria

**Cadastrar → Consultar → Filtrar → Verificar disponibilidade**

### 👨‍🏫 Docente

**Consultar → Ver disponibilidade → Selecionar data e horário → Verificar status → Reservar**

### 🏷️ Patrimônio

**Identificar → Conferir → Controlar**

### 🔧 Manutenção

**Receber → Atender → Finalizar → Medir SLA → Gerar relatórios**

---

> ### 💡 Visão do Projeto
>
> **SGA — Sistema de Gestão de Ambientes**
>
> Uma solução pensada para transformar informações dispersas em **controle, organização e eficiência na gestão dos ambientes institucionais.**

---

**📄 Documento de escopo inicial — Versão 01**
**📅 Data de referência: 08/09/2026**
