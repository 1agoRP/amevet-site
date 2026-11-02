import { useEffect, useState } from 'react';
import { CLINICA, MENSAGENS, MENU, linkWhatsapp } from '../dados/clinica';
import Icone from './ui/Icone';

export default function Cabecalho() {
  const [rolou, setRolou] = useState(false);
  const [menuAberto, setMenuAberto] = useState(false);

  useEffect(() => {
    const aoRolar = () => setRolou(window.scrollY > 24);
    aoRolar();
    window.addEventListener('scroll', aoRolar, { passive: true });
    return () => window.removeEventListener('scroll', aoRolar);
  }, []);

  // Trava o corpo da página enquanto o menu mobile está aberto
  useEffect(() => {
    document.body.style.overflow = menuAberto ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuAberto]);

  useEffect(() => {
    const aoTeclar = (evento: KeyboardEvent) => {
      if (evento.key === 'Escape') setMenuAberto(false);
    };
    window.addEventListener('keydown', aoTeclar);
    return () => window.removeEventListener('keydown', aoTeclar);
  }, []);

  const solido = rolou || menuAberto;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solido ? 'bg-white/95 shadow-suave backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="container flex h-[4.5rem] items-center justify-between gap-6 lg:h-20">
        <a
          href="#inicio"
          className="flex shrink-0 items-center gap-2.5"
          aria-label={`${CLINICA.nomeCompleto} — ir para o início`}
          onClick={() => setMenuAberto(false)}
        >
          <img
            src="marca-amevet.webp"
            alt=""
            width={44}
            height={34}
            className="h-[1.9rem] w-auto lg:h-9"
            fetchPriority="high"
          />
          <span className="flex flex-col leading-none">
            <span
              className={`font-titulo text-xl font-bold tracking-[-.02em] transition-colors lg:text-[1.4rem] ${
                solido ? 'text-vermelho' : 'text-white'
              }`}
            >
              AMEVET
            </span>
            <span
              className={`mt-0.5 hidden text-[0.5625rem] font-semibold uppercase tracking-[.18em] transition-colors sm:block ${
                solido ? 'text-carvao-tenue' : 'text-white/75'
              }`}
            >
              Clínica Veterinária
            </span>
          </span>
        </a>

        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {MENU.map((item) => (
              <li key={item.ancora}>
                <a
                  href={item.ancora}
                  className={`rounded-full px-3.5 py-2 text-[0.9375rem] font-medium transition-colors ${
                    solido ? 'text-carvao-suave hover:bg-nevoa hover:text-carvao' : 'text-white/85 hover:text-white'
                  }`}
                >
                  {item.rotulo}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={linkWhatsapp(MENSAGENS.agendamento)}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-vermelho px-5 py-2.5 font-titulo text-[0.9375rem] font-semibold text-white shadow-suave transition-all hover:bg-vermelho-escuro hover:shadow-cartao active:scale-[.98] sm:inline-flex"
          >
            <Icone nome="whatsapp" className="h-[1.1rem] w-[1.1rem]" />
            Agendar pelo WhatsApp
          </a>

          <button
            type="button"
            onClick={() => setMenuAberto((aberto) => !aberto)}
            aria-expanded={menuAberto}
            aria-controls="menu-mobile"
            aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full transition-colors lg:hidden ${
              solido ? 'text-carvao hover:bg-nevoa' : 'text-white hover:bg-white/15'
            }`}
          >
            <Icone nome={menuAberto ? 'fechar' : 'menu'} className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <div
        id="menu-mobile"
        hidden={!menuAberto}
        className="border-t border-carvao/10 bg-white lg:hidden"
      >
        <nav aria-label="Navegação principal (mobile)" className="container py-4">
          <ul className="flex flex-col">
            {MENU.map((item) => (
              <li key={item.ancora}>
                <a
                  href={item.ancora}
                  onClick={() => setMenuAberto(false)}
                  className="flex items-center justify-between border-b border-carvao/5 py-3.5 font-titulo text-[1.0625rem] font-medium text-carvao"
                >
                  {item.rotulo}
                  <Icone nome="seta" className="h-4 w-4 text-carvao-tenue" />
                </a>
              </li>
            ))}
          </ul>

          <a
            href={linkWhatsapp(MENSAGENS.agendamento)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuAberto(false)}
            className="mt-5 flex items-center justify-center gap-2 rounded-full bg-vermelho px-6 py-3.5 font-titulo font-semibold text-white"
          >
            <Icone nome="whatsapp" className="h-5 w-5" />
            Agendar pelo WhatsApp
          </a>
          <a
            href={`tel:${CLINICA.telefone.discagem}`}
            className="mt-2.5 flex items-center justify-center gap-2 rounded-full border border-carvao/15 px-6 py-3.5 font-titulo font-semibold text-carvao"
          >
            <Icone nome="telefone" className="h-5 w-5" />
            {CLINICA.telefone.exibicao}
          </a>
        </nav>
      </div>
    </header>
  );
}
