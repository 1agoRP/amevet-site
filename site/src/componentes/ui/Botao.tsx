import type { AnchorHTMLAttributes, ReactNode } from 'react';

type Variante = 'vermelho' | 'turquesa' | 'contorno' | 'claro';
type Tamanho = 'md' | 'lg';

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variante?: Variante;
  tamanho?: Tamanho;
  /** `true` em links que saem do site — adiciona target e rel seguros. */
  externo?: boolean;
  children: ReactNode;
};

const BASE =
  'group inline-flex items-center justify-center gap-2 rounded-full font-titulo font-semibold tracking-[-.01em] transition-all duration-200 active:scale-[.98] disabled:opacity-50';

const VARIANTES: Record<Variante, string> = {
  vermelho: 'bg-vermelho text-white shadow-suave hover:bg-vermelho-escuro hover:shadow-cartao',
  turquesa: 'bg-turquesa text-white shadow-suave hover:bg-turquesa-escuro hover:shadow-cartao',
  contorno: 'border border-carvao/15 bg-white text-carvao hover:border-turquesa hover:text-turquesa-escuro',
  claro: 'bg-white/15 text-white ring-1 ring-inset ring-white/35 backdrop-blur-sm hover:bg-white/25',
};

const TAMANHOS: Record<Tamanho, string> = {
  md: 'px-5 py-2.5 text-[0.9375rem]',
  lg: 'px-7 py-3.5 text-base',
};

export default function Botao({
  href,
  variante = 'vermelho',
  tamanho = 'md',
  externo = false,
  className = '',
  children,
  ...resto
}: Props) {
  const externoProps = externo ? { target: '_blank', rel: 'noopener noreferrer' } : {};

  return (
    <a
      href={href}
      className={`${BASE} ${VARIANTES[variante]} ${TAMANHOS[tamanho]} ${className}`}
      {...externoProps}
      {...resto}
    >
      {children}
    </a>
  );
}
