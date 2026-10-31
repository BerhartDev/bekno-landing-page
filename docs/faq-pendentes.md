# Perguntas frequentes pendentes

Estas perguntas entram em `faq.groups` (nos 4 JSON de `src/locales/`) quando os dados estiverem confirmados em `src/lib/site.ts`. Pela regra 3 do CLAUDE.md, nenhuma resposta pode ter preço, prazo ou condição inventada.

| Pergunta | Depende de |
|----------|------------|
| Quanto custa um site? | `SITE.prices` (valores "a partir de" por tipo de site) |
| Como é o pagamento? | Condições de pagamento (entrada, parcelas, formas aceitas) |
| Tem mensalidade? | `SITE.prices.maintenanceMonthly` e o que a manutenção inclui |
| Quanto tempo leva? | `SITE.deadlinesWeeks.total` |
| Quantas alterações posso pedir? | Número de rodadas de ajustes incluídas e `SITE.warrantyDays` |
| Vou conseguir mudar textos e fotos sozinho? | Confirmar que todo site vem com painel para o cliente atualizar |
| Vocês fazem e-mail profissional? | Confirmar se o serviço é oferecido e como funciona |

Ao incluir uma pergunta:

1. Adicione o item no grupo certo nos 4 idiomas, em linguagem leiga (regras 1 e 2).
2. Se a resposta usar um número de `SITE`, monte o texto no componente (como em `descriptionResponseTime` da `ChecklistSection`) para o número não ficar fixo no JSON.
3. O JSON-LD `FAQPage` (`src/lib/seo.ts`) usa as mesmas perguntas e se atualiza sozinho.
