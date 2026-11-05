# Banco relacional

O arquivo `t.sql` e uma planilha TSV exportada, nao um script SQL. A conversao foi feita para um modelo normalizado em `schema-relacional.sql`.

## Modelo

- `niveis` -> `tipos_curso` -> `cursos` -> `turmas`
- `componentes_curriculares` guarda cada componente uma vez
- `docentes` guarda cada docente uma vez
- `turma_componentes_docentes` relaciona turma, componente, docente e carga horaria
- `vw_oferta_academica` reproduz a visao tabular original com `JOIN`s

## Importar no Supabase

1. Abra o SQL Editor do Supabase.
2. Execute `schema-relacional.sql`.
3. Execute `t-relacional.sql`.

O arquivo `t-relacional.sql` foi gerado a partir do TSV e contem 623 linhas validas. Docentes ausentes na planilha sao gravados como `NULL`, sem criar registros ficticios.

Este modelo representa os dados academicos de `t.sql` e usa as tabelas relacionais existentes no Supabase, incluindo `alocacoes_ambiente`, `turma_componentes_docentes` e `sugestoes_manutencao`.

## Manutenção

`sugestoes_manutencao.criadoem` deve ser `timestamp with time zone` e ter `now()` como valor padrão para registrar a data e hora da solicitação. Para atualizar a tabela existente no Supabase, execute `migrar-data-sugestoes-manutencao.sql` no SQL Editor. As datas antigas, que só têm precisão de dia, serão preservadas como meia-noite no fuso de São Paulo; registros antigos sem data continuam sem data.

Os diagramas de classes da aplicação e de entidade-relacionamento da manutenção estão em `../../Diagramas/Classes/Manutencao.puml` e `../../Diagramas/Entidade e Relacionamento/Manutencao.puml`.