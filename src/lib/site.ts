export const SITE = {
  brand: 'BEKNO',
  foundedYear: 2022,
  legalName: '',            // TODO [PENDENTE] razão social
  cnpj: '',                 // TODO [PENDENTE]
  streetAddress: '',        // TODO [PENDENTE] endereço comercial
  neighborhood: 'Ipanema',
  city: 'Rio de Janeiro',
  region: 'RJ',
  phoneE164: '+5521973692691',
  phoneDisplay: '(21) 97369-2691',
  whatsapp: '5521973692691', // TODO [CONFIRMAR] número é WhatsApp
  email: '',                // TODO [PENDENTE] e-mail @bekno.com.br
  social: { instagram: '', linkedin: '', google: '' }, // TODO [PENDENTE]
  responseTimeHours: 0,     // TODO [PENDENTE] tempo de resposta do suporte
  warrantyDays: 0,          // TODO [PENDENTE] dias de correção sem custo
  loadTimeSeconds: 0,       // preenchido com medição real
  prices: { landing: 0, institutional: 0, store: 0, platform: 0, maintenanceMonthly: 0, brandAndSite: 0 }, // TODO [PENDENTE]
  budgetRanges: { low: 0, high: 0 }, // TODO [PENDENTE] faixas do formulário
  deadlinesWeeks: { total: 0 }, // TODO [PENDENTE]
  stats: { projectsDelivered: 0, googleRating: 0 }, // TODO [PENDENTE]
  legalPagesReady: false,   // vira true após revisão jurídica das páginas legais
} as const;

export const whatsappUrl = (text?: string) =>
  `https://wa.me/${SITE.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`;

export const hasValue = (v: string | number) => (typeof v === 'number' ? v > 0 : v.trim() !== '');
