export type Area = {
  id: string;
  name: string;
  summary: string;
  services: string[];
  cases: string;
};

export const AREAS: Area[] = [
  {
    id: 'empresarial',
    name: 'Direito empresarial',
    summary: 'Estruturação de sociedades, acordos de sócios e operações societárias para empresas em crescimento.',
    services: ['Constituição e reorganização societária', 'Acordo de sócios e vesting', 'Fusões e aquisições de pequeno porte', 'Governança para empresas familiares'],
    cases: 'Entrada de investidor, saída de sócio, sucessão na empresa da família.',
  },
  {
    id: 'trabalhista',
    name: 'Trabalhista empresarial',
    summary: 'Prevenção e defesa para empregadores, com foco em reduzir passivo antes que ele vire processo.',
    services: ['Auditoria de rotinas de RH', 'Defesa em reclamações trabalhistas', 'Políticas internas e compliance', 'Negociação com sindicatos'],
    cases: 'Fiscalização do trabalho, demissões coletivas, revisão de contratos de prestadores.',
  },
  {
    id: 'tributario',
    name: 'Tributário',
    summary: 'Planejamento tributário e recuperação de créditos dentro da lei, com números na mesa.',
    services: ['Revisão do regime de tributação', 'Recuperação de créditos', 'Defesa em autos de infração', 'Adequação à reforma tributária'],
    cases: 'Mudança de regime, tributação na venda on-line, autuação estadual.',
  },
  {
    id: 'contratos',
    name: 'Contratos',
    summary: 'Contratos claros, que protegem sem travar o negócio, revisados com quem conhece a operação.',
    services: ['Contratos com clientes e fornecedores', 'Termos de uso e privacidade (LGPD)', 'Locação comercial', 'Contratos de tecnologia e software'],
    cases: 'Primeiro grande cliente, contrato de franquia, adequação à LGPD.',
  },
  {
    id: 'familia',
    name: 'Família e sucessões',
    summary: 'Planejamento patrimonial e sucessório com discrição, para proteger a família e o negócio.',
    services: ['Holding familiar', 'Testamentos e doações', 'Inventário judicial e extrajudicial', 'Pactos antenupciais'],
    cases: 'Sucessão de empresário, partilha de bens, proteção de patrimônio.',
  },
];
