/** Ícones lineares desenhados para o site — traço de 1.6, cantos arredondados. */

export type NomeIcone =
  | 'coracao'
  | 'estetoscopio'
  | 'escudo'
  | 'tesoura'
  | 'whatsapp'
  | 'instagram'
  | 'telefone'
  | 'pino'
  | 'relogio'
  | 'estrela'
  | 'seta'
  | 'rota'
  | 'menu'
  | 'fechar'
  | 'pata';

type Props = {
  nome: NomeIcone;
  className?: string;
};

const TRACOS: Record<NomeIcone, React.ReactNode> = {
  coracao: <path d="M12 20.5s-7.5-4.6-7.5-9.8A4.2 4.2 0 0 1 12 7.8a4.2 4.2 0 0 1 7.5 2.9c0 5.2-7.5 9.8-7.5 9.8Z" />,
  estetoscopio: (
    <>
      <path d="M5 3v5a4 4 0 0 0 8 0V3" />
      <path d="M4 3h2M12 3h2" />
      <path d="M9 12v2a5 5 0 0 0 10 0v-1" />
      <circle cx="19" cy="10" r="2" />
    </>
  ),
  escudo: (
    <>
      <path d="M12 3.2 5 6v5.2c0 4.4 2.9 7.6 7 9.6 4.1-2 7-5.2 7-9.6V6l-7-2.8Z" />
      <path d="m9.3 12 1.9 1.9 3.6-3.7" />
    </>
  ),
  tesoura: (
    <>
      <circle cx="6" cy="6" r="2.4" />
      <circle cx="6" cy="18" r="2.4" />
      <path d="M19.5 4.5 8 16M8 8 19.5 19.5" />
    </>
  ),
  whatsapp: (
    <path d="M3.5 20.5 4.9 16a8 8 0 1 1 3.1 3.1l-4.5 1.4Zm6.1-5.9c1.3 1.7 2.7 2.3 4 2.6.7.1 1.3-.4 1.5-1 .1-.3.1-.7 0-.8l-1.6-.8c-.2-.1-.5 0-.6.2l-.4.5c-.1.1-.3.2-.4.1a5.6 5.6 0 0 1-2.3-2.2c-.1-.2 0-.3.1-.4l.4-.5c.2-.2.2-.4.1-.6l-.7-1.6c-.1-.2-.4-.3-.7-.2-.7.2-1.2.8-1.1 1.6.1 1 .5 2.1 1.7 3.1Z" />
  ),
  instagram: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="3.8" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  telefone: (
    <path d="M6.3 3.8h3L10.6 7 8.9 8.4a11.5 11.5 0 0 0 5.6 5.6L16 12.3l3.2 1.3v3a1.8 1.8 0 0 1-2 1.8A14.6 14.6 0 0 1 4.5 5.8a1.8 1.8 0 0 1 1.8-2Z" />
  ),
  pino: (
    <>
      <path d="M12 21.2s7-5.6 7-11.1a7 7 0 1 0-14 0c0 5.5 7 11.1 7 11.1Z" />
      <circle cx="12" cy="10" r="2.7" />
    </>
  ),
  relogio: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.4V12l3 1.8" />
    </>
  ),
  estrela: (
    <path
      d="m12 3.6 2.6 5.3 5.8.8-4.2 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L3.6 9.7l5.8-.8L12 3.6Z"
      fill="currentColor"
      stroke="none"
    />
  ),
  seta: <path d="M5 12h13m-5.5-5.5L19 12l-6.5 5.5" />,
  rota: (
    <>
      <path d="M4 17h3a3 3 0 0 0 3-3V9a3 3 0 0 1 3-3h4" />
      <path d="m15.5 3.5 2.8 2.5-2.8 2.5" />
      <circle cx="4" cy="17" r="1.8" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  fechar: <path d="m6 6 12 12M18 6 6 18" />,
  pata: (
    <>
      <ellipse cx="8.2" cy="7.6" rx="1.9" ry="2.5" />
      <ellipse cx="15.8" cy="7.6" rx="1.9" ry="2.5" />
      <ellipse cx="4.6" cy="12.8" rx="1.7" ry="2.2" />
      <ellipse cx="19.4" cy="12.8" rx="1.7" ry="2.2" />
      <path d="M12 12.2c2.9 0 5.2 2.1 5.2 4.4 0 1.9-1.6 3-3.4 2.6-1.2-.3-2.4-.3-3.6 0-1.8.4-3.4-.7-3.4-2.6 0-2.3 2.3-4.4 5.2-4.4Z" />
    </>
  ),
};

export default function Icone({ nome, className = 'h-5 w-5' }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {TRACOS[nome]}
    </svg>
  );
}
