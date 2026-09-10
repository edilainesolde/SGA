# Projeto — SGA: Sistema de Gestão de Ambientes

**Nome provisório do grupo:** 30+  
**Reunião de definição do escopo:** 08/09/2026  
**Etapa:** Segundo semestre

## Participantes

- Bianca Cirilo
- Edilaine Paulino
- Fabio Bitencourt
- Guilherme Leite
- Ronaldo Soares

---

## 1. Contexto

O projeto **SGA – Sistema de Gestão de Ambientes** tem como objetivo aperfeiçoar a solução desenvolvida no primeiro semestre, ampliando suas funcionalidades para facilitar a **gestão, ocupação, consulta, reserva e manutenção dos espaços físicos da instituição**.

A proposta é centralizar as informações sobre salas, turmas, docentes, horários, reservas, patrimônio e manutenção.

---

## 2. Objetivo Geral

Desenvolver uma solução para gerenciamento dos espaços físicos, permitindo:

- Cadastro de salas, turmas e docentes;
- Alocação de aulas e ambientes;
- Consulta da disponibilidade das salas;
- Controle e reserva de ambientes;
- Relatórios de utilização;
- Controle patrimonial por **RFID e/ou QR Code**;
- Registro e acompanhamento de ocorrências de manutenção;
- Monitoramento de **SLA** e indicadores.

---

## 3. Perfis de Acesso

### Coordenação
Responsável pelas principais funções administrativas:

- Cadastrar docentes, turmas e salas;
- Gerenciar horários;
- Alocar salas;
- Relacionar aula, turma, docente, sala e horário;
- Consultar relatórios de utilização.

### Secretaria
Poderá:

- Cadastrar docentes e turmas;
- Consultar disponibilidade e utilização das salas;
- Pesquisar informações por sala, turma, docente e período.

### Docente
Poderá:

- Consultar sua alocação;
- Consultar salas disponíveis;
- Filtrar salas e horários;
- Realizar reservas de ambientes.

A reserva deverá considerar:

**Sala + Data + Horário + Docente + NIF + Finalidade**

A informação de turma será opcional.

### Manutenção
Módulo previsto como alternativa caso a implantação do RFID não seja viável dentro do prazo.

---

## 4. Funcionalidades Principais

### Gestão de Salas
- Cadastro de salas;
- Cadastro de turmas;
- Cadastro de docentes;
- Controle de horários;
- Alocação de ambientes;
- Consulta de disponibilidade;
- Relatório central de utilização.

### Reserva de Salas
Fluxo previsto:

**Selecionar sala → Selecionar data → Selecionar horário → Informar dados → Confirmar reserva**

O sistema deverá evitar conflitos entre reservas e alocações existentes.

### Relatórios

Permitir consultas por:

- Sala;
- Turma;
- Docente;
- Período;
- Status.

As informações poderão incluir:

**Sala + Turma + Docente + Data + Horário + Status**

---

## 5. Controle Patrimonial

Será analisada a utilização de:

### RFID
Para identificação e controle dos patrimônios existentes nos ambientes.

### QR Code
Como alternativa ou complemento ao RFID, permitindo acessar um **checklist patrimonial por sala**.

Exemplo:

**Sala 203**
- Computador
- Projetor
- Ar-condicionado
- Mesa
- Cadeiras
- Quadro
- Outros equipamentos

---

## 6. Módulo de Manutenção

Caso o RFID não seja viável, o projeto poderá priorizar o desenvolvimento do módulo de manutenção.

### Registro de Ocorrências

O usuário poderá registrar problemas, informando:

- Solicitante;
- Turma, quando aplicável;
- Local/sala;
- Descrição;
- Data e hora;
- Foto opcional;
- Tipo de ocorrência.

Exemplos:

- Vazamento;
- Ar-condicionado com defeito;
- Lâmpada queimada;
- Equipamento danificado;
- Problemas elétricos;
- Problemas estruturais.

### Fluxo de Atendimento

**Solicitação aberta → Recebido → Em andamento/Em manutenção → Finalizado**

O sistema deverá registrar o histórico de cada etapa, incluindo data, hora e responsável.

---

## 7. SLA e Indicadores

O módulo de manutenção deverá permitir acompanhar:

- Tempo de resposta;
- Tempo até o início do atendimento;
- Tempo de solução;
- Tempo total;
- SLA cumprido;
- SLA excedido.

Também poderão ser apresentados indicadores como:

- Total de ocorrências;
- Ocorrências em andamento;
- Ocorrências finalizadas;
- Tempo médio de atendimento;
- Locais com maior número de ocorrências;
- Tipos de problemas mais recorrentes.

---

## 8. Prioridades do Projeto

### Prioridade 1 — Essencial
- Mapeamento dos espaços;
- Análise de requisitos;
- Login e controle de acesso;
- Cadastro de salas;
- Cadastro de docentes;
- Cadastro de turmas;
- Alocação de salas;
- Controle de horários;
- Relatório de utilização.

### Prioridade 2 — Evolução
- Reserva de salas;
- Filtros;
- QR Code;
- Checklist patrimonial.

### Prioridade 3 — Conforme viabilidade
- RFID;
- Controle patrimonial;
- Módulo de manutenção;
- Histórico de ocorrências;
- SLA;
- Indicadores;
- Upload de fotos.

---

## 9. Roadmap

**Fase 1 — Levantamento**
- Mapeamento;
- Processos;
- Requisitos;
- Validação.

**Fase 2 — Modelagem**
- Estrutura do sistema;
- Perfis;
- Banco de dados;
- Fluxos.

**Fase 3 — Desenvolvimento**
- Login;
- Perfis;
- Cadastros;
- Salas;
- Turmas;
- Docentes;
- Alocações;
- Reservas;
- Relatórios.

**Fase 4 — Evoluções**
- QR Code;
- Checklist;
- Estudo/implantação do RFID.

**Fase 5 — Plano Alternativo**
- Módulo de manutenção;
- Ocorrências;
- Atendimento;
- Histórico;
- SLA;
- Relatórios.

**Fase 6 — Testes**
- Testes funcionais;
- Testes de perfis;
- Testes de reservas;
- Testes de relatórios;
- Validação com usuários.

---

## 10. Resultado Esperado

Ao final do projeto, espera-se disponibilizar uma solução integrada para facilitar a gestão dos ambientes da instituição.

**Coordenação:**  
Administrar → Cadastrar → Alocar → Consultar → Gerar relatórios

**Secretaria:**  
Cadastrar → Consultar → Filtrar → Verificar disponibilidade

**Docente:**  
Consultar → Ver disponibilidade → Reservar

**Patrimônio:**  
Identificar → Conferir → Controlar

**Manutenção:**  
Receber → Atender → Finalizar → Medir SLA → Gerar relatórios

---

**Documento de escopo inicial — Versão 01**  
**Data de referência: 08/09/2026**
