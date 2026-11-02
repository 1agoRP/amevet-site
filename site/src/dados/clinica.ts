/**
 * Fonte única de verdade do site.
 *
 * Todo o conteúdo aqui foi conferido em fontes oficiais da clínica
 * (perfil do Google, Instagram @amevet_clinicaveterinaria).
 * O que ainda não foi confirmado está marcado com PENDENTE e NÃO aparece
 * no site até que alguém da clínica confirme — ver README.md.
 */

/* ------------------------------------------------------------------ */
/* Identificação e contato                                             */
/* ------------------------------------------------------------------ */

export const CLINICA = {
  nome: 'AMEVET',
  nomeCompleto: 'AMEVET Clínica Veterinária e Estética Animal',
  descricaoCurta: 'Clínica veterinária e estética animal na Vila Medeiros, Zona Norte de São Paulo.',
  conceito: 'Cuidando com carinho de quem faz parte da sua família.',

  endereco: {
    logradouro: 'Avenida Gustavo Adolfo, 2210',
    bairro: 'Vila Medeiros',
    cidade: 'São Paulo',
    uf: 'SP',
    cep: '02209-000',
    get completo() {
      return `${this.logradouro} — ${this.bairro}, ${this.cidade}/${this.uf}`;
    },
  },

  /** Coordenadas do perfil oficial no Google Maps. */
  geo: { latitude: -23.4881007, longitude: -46.58002 },

  telefone: {
    exibicao: '(11) 2305-7686',
    discagem: '+551123057686',
  },

  /**
   * Número usado nos links wa.me (somente dígitos, com DDI).
   *
   * Definido conforme o briefing: o fixo (11) 2305-7686 → 551123057686.
   * O Instagram oficial também divulga o celular 📱 (11) 99106-3122
   * (→ 5511991063122). Se o WhatsApp da clínica for o celular, basta
   * trocar a linha abaixo — todos os botões do site passam a usá-lo.
   */
  whatsapp: '551123057686',

  instagram: {
    usuario: '@amevet_clinicaveterinaria',
    url: 'https://www.instagram.com/amevet_clinicaveterinaria/',
    seguidores: 1080,
  },

  googleMaps: {
    url: 'https://www.google.com/maps/place/AMEVET+Cl%C3%ADnica+Veterin%C3%A1ria+e+Est%C3%A9tica+Animal/@-23.4881007,-46.58002,17z/data=!4m6!3m5!1s0x94cef5d59126383b:0xf245a088d04e5e37!8m2!3d-23.4881007!4d-46.58002!16s%2Fg%2F12llmp1jz',
    rotas:
      'https://www.google.com/maps/dir/?api=1&destination=AMEVET+Cl%C3%ADnica+Veterin%C3%A1ria+e+Est%C3%A9tica+Animal%2C+Av.+Gustavo+Adolfo%2C+2210%2C+Vila+Medeiros%2C+S%C3%A3o+Paulo+-+SP%2C+02209-000',
    incorporado:
      'https://www.google.com/maps?q=Av.+Gustavo+Adolfo,+2210+-+Vila+Medeiros,+S%C3%A3o+Paulo+-+SP,+02209-000&hl=pt-BR&z=16&output=embed',
  },

  /** Avaliação pública do perfil da clínica no Google. */
  avaliacaoGoogle: {
    nota: 4.7,
    quantidade: 175,
  },
} as const;

/**
 * PENDENTE DE CONFIRMAÇÃO PELA CLÍNICA.
 *
 * O perfil do Google não expõe a grade completa de horários publicamente e o
 * briefing pede para não publicar informação não confirmada. Enquanto
 * `confirmado` for `false`, o site exibe um aviso convidando ao contato em vez
 * dos horários. Depois que a clínica confirmar: ajuste a grade abaixo se
 * necessário e troque `confirmado` para `true`.
 */
export const HORARIOS = {
  confirmado: false,
  grade: [
    { dias: 'Segunda a sexta', horario: '09h às 19h' },
    { dias: 'Sábado', horario: '09h às 16h' },
    { dias: 'Domingo', horario: 'Fechado' },
  ],
  avisoNaoConfirmado: 'Fale com a gente pelo WhatsApp para confirmar os horários de atendimento.',
} as const;

/* ------------------------------------------------------------------ */
/* Navegação                                                           */
/* ------------------------------------------------------------------ */

export const MENU = [
  { rotulo: 'Início', ancora: '#inicio' },
  { rotulo: 'A Clínica', ancora: '#a-clinica' },
  { rotulo: 'Serviços', ancora: '#servicos' },
  { rotulo: 'Banho e Tosa', ancora: '#banho-e-tosa' },
  { rotulo: 'Depoimentos', ancora: '#depoimentos' },
  { rotulo: 'Contato', ancora: '#contato' },
] as const;

/* ------------------------------------------------------------------ */
/* Serviços — confirmados na bio oficial do Instagram                  */
/* "Clínica Veterinária e Estética Animal. Cirurgia Geral e Ortopédica,*/
/* Clínica, Castração, Vacinas importadas, Exames."                    */
/* ------------------------------------------------------------------ */

export type Servico = {
  id: string;
  nome: string;
  descricao: string;
  imagem: string;
  alt: string;
  mensagem: string;
  destaque?: boolean;
};

export const SERVICOS: Servico[] = [
  {
    id: 'consultas',
    nome: 'Consultas veterinárias',
    descricao:
      'Atendimento clínico para cães e gatos, com avaliação cuidadosa do seu pet e orientação clara sobre cada passo do tratamento.',
    imagem: 'img/svc-consulta.webp',
    alt: 'Veterinário acolhendo um cão corgi sobre a mesa de atendimento',
    mensagem: 'Olá! Encontrei a AMEVET pelo site e gostaria de informações sobre agendamento de consulta veterinária.',
  },
  {
    id: 'exames',
    nome: 'Exames',
    descricao:
      'Exames para apoiar o diagnóstico e acompanhar a saúde do seu pet ao longo do tratamento, com resultados explicados sem pressa.',
    imagem: 'img/svc-exames.webp',
    alt: 'Cão de pequeno porte sendo contido com carinho em sala de exames',
    mensagem: 'Olá! Encontrei a AMEVET pelo site e gostaria de informações sobre os exames disponíveis para o meu pet.',
  },
  {
    id: 'vacinas',
    nome: 'Vacinas importadas',
    descricao:
      'Aplicação de vacinas importadas em um ambiente tranquilo, com orientação sobre o calendário ideal para cada fase da vida.',
    imagem: 'img/svc-vacinacao.webp',
    alt: 'Filhote recebendo medicação em seringa oral das mãos de uma profissional',
    mensagem: 'Olá! Encontrei a AMEVET pelo site e gostaria de informações sobre vacinação para o meu pet.',
  },
  {
    id: 'cirurgia',
    nome: 'Cirurgia geral e ortopédica',
    descricao:
      'Procedimentos cirúrgicos gerais e ortopédicos conduzidos por equipe veterinária, com acompanhamento antes e depois da cirurgia.',
    imagem: 'img/svc-cirurgia.webp',
    alt: 'Equipe veterinária durante procedimento cirúrgico em centro cirúrgico',
    mensagem: 'Olá! Encontrei a AMEVET pelo site e gostaria de informações sobre procedimentos cirúrgicos.',
  },
  {
    id: 'castracao',
    nome: 'Castração',
    descricao:
      'Castração de cães e gatos com avaliação prévia, cuidado no pós-operatório e orientação completa para o tutor.',
    imagem: 'img/svc-castracao.webp',
    alt: 'Filhote de cão sendo acolhido com as mãos sobre a mesa da clínica',
    mensagem: 'Olá! Encontrei a AMEVET pelo site e gostaria de informações sobre castração.',
  },
  {
    id: 'banho-tosa',
    nome: 'Banho e tosa',
    descricao:
      'Estética animal com banho, secagem, escovação e tosa — o cuidado com a higiene e o conforto do seu pet, do começo ao fim.',
    imagem: 'img/svc-banho-tosa.webp',
    alt: 'Cão sendo enrolado em toalha após o banho',
    mensagem: 'Olá! Gostaria de informações e horários disponíveis para banho e tosa do meu pet.',
    destaque: true,
  },
];

/* ------------------------------------------------------------------ */
/* Diferenciais                                                        */
/* ------------------------------------------------------------------ */

export const DIFERENCIAIS = [
  {
    icone: 'coracao' as const,
    titulo: 'Cuidado e carinho',
    texto: 'Cada animal é recebido com paciência e atenção, no ritmo que ele precisa para se sentir seguro.',
  },
  {
    icone: 'estetoscopio' as const,
    titulo: 'Atendimento veterinário',
    texto: 'Consultas, exames e procedimentos conduzidos por equipe veterinária, com explicação clara ao tutor.',
  },
  {
    icone: 'escudo' as const,
    titulo: 'Saúde e bem-estar',
    texto: 'Vacinação, castração e acompanhamento para manter seu pet saudável em todas as fases da vida.',
  },
  {
    icone: 'tesoura' as const,
    titulo: 'Estética e higiene',
    texto: 'Banho, tosa e escovação feitos com calma, deixando seu pet limpo, confortável e bonito.',
  },
];

/* ------------------------------------------------------------------ */
/* Depoimentos — avaliações públicas reais do perfil no Google         */
/* Nada aqui foi escrito por nós.                                      */
/* ------------------------------------------------------------------ */

export type Depoimento = {
  autor: string;
  quando: string;
  nota: number;
  texto: string;
  resposta?: string;
};

export const DEPOIMENTOS: Depoimento[] = [
  {
    autor: 'Aldi Moreira',
    quando: 'há 3 meses',
    nota: 5,
    texto:
      'Fui muito bem recepcionado pela Maria Eduarda e atendido pela Dra Bianca! Meu gato está com dificuldade para urinar e foram muito atenciosas e carinhosas. Local limpo e organizo, parabéns!',
    resposta: 'Obrigado pelo comentario , nos deixa com a certeza de que estamos no rumo certo.',
  },
  {
    autor: 'Nayara Alcantara',
    quando: 'há 3 anos',
    nota: 5,
    texto:
      'Equipe extremamente atenciosa e demonstra um verdadeiro amor pelos animais. Sempre que preciso de cuidados para o Luigi, eles estão prontos para ajudar! O banho e tosa também é excepcional, Vanessa muito caprichosa nos detalhes.',
  },
  {
    autor: 'Vanessa Cestari',
    quando: 'há 5 anos',
    nota: 5,
    texto:
      'Tenho a cachorrinha, uma filha de 4 patas chamada Gorda. Há uns meses descobrimos nela um tumor de aproximadamente 6 cm na região do fígado. O especialista explicou tudo e respondeu todas as perguntas, e os preços são justos.',
  },
];

/** Trechos em destaque que o próprio Google exibe como resumo das avaliações. */
export const RESUMO_AVALIACOES = [
  'Levo sempre meus cachorros no banho e tosa e sempre voltam muito bem cuidados.',
  'Profissionais altamente competentes, atenciosos e prestativos.',
  'Bom atendimento, preços acessíveis e localização de fácil acesso.',
];

/* ------------------------------------------------------------------ */
/* Galeria                                                             */
/* ------------------------------------------------------------------ */

export const GALERIA = [
  { src: 'img/galeria-1.webp', alt: 'Cão sorridente em retrato de estúdio' },
  { src: 'img/tosa-detalhe-1.webp', alt: 'Cão sendo secado e escovado após o banho' },
  { src: 'img/galeria-2.webp', alt: 'Gato de pelagem clara olhando para a câmera' },
  { src: 'img/clinica-atendimento.webp', alt: 'Cão sendo examinado na sala de atendimento' },
  { src: 'img/galeria-3.webp', alt: 'Gato deitado tranquilamente' },
  { src: 'img/tosa-detalhe-2.webp', alt: 'Cão de pequeno porte durante o banho' },
  { src: 'img/galeria-4.webp', alt: 'Cão de porte médio em retrato' },
  { src: 'img/galeria-8.webp', alt: 'Cão sendo preparado para a tosa' },
  { src: 'img/galeria-5.webp', alt: 'Gato observando com olhar atento' },
  { src: 'img/galeria-6.webp', alt: 'Cão feliz ao ar livre' },
  { src: 'img/galeria-7.webp', alt: 'Gato de pelagem escura em close' },
  { src: 'img/clinica-cuidado.webp', alt: 'Profissional segurando um filhote no colo' },
];

/* ------------------------------------------------------------------ */
/* WhatsApp                                                            */
/* ------------------------------------------------------------------ */

/** Monta um link wa.me já com a mensagem pronta para o tutor enviar. */
export function linkWhatsapp(mensagem: string): string {
  return `https://wa.me/${CLINICA.whatsapp}?text=${encodeURIComponent(mensagem)}`;
}

export const MENSAGENS = {
  geral: 'Olá! Encontrei a AMEVET pelo site e gostaria de mais informações.',
  consulta: 'Olá! Encontrei a AMEVET pelo site e gostaria de informações sobre agendamento de consulta veterinária.',
  banhoTosa: 'Olá! Gostaria de informações e horários disponíveis para banho e tosa do meu pet.',
  agendamento: 'Olá! Encontrei a AMEVET pelo site e gostaria de agendar um atendimento para o meu pet.',
} as const;
