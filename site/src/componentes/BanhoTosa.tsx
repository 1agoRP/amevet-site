import { MENSAGENS, linkWhatsapp } from '../dados/clinica';
import Botao from './ui/Botao';
import Icone from './ui/Icone';

const ETAPAS = ['Banho', 'Secagem', 'Escovação', 'Tosa'];

export default function BanhoTosa() {
  return (
    <section id="banho-e-tosa" className="scroll-mt-24 py-20 lg:py-28">
      <div className="container">
        <div className="relative isolate overflow-hidden rounded-5xl bg-turquesa px-6 py-14 sm:px-10 lg:px-16 lg:py-20">
          {/* Textura discreta de patinhas */}
          <svg
            className="pointer-events-none absolute -right-10 -top-10 h-72 w-72 text-white/10 lg:h-96 lg:w-96"
            viewBox="0 0 100 100"
            fill="currentColor"
            aria-hidden="true"
          >
            <circle cx="30" cy="25" r="9" />
            <circle cx="52" cy="18" r="9" />
            <circle cx="73" cy="28" r="8" />
            <circle cx="84" cy="48" r="7.5" />
            <ellipse cx="55" cy="60" rx="24" ry="20" />
          </svg>

          <div className="relative grid items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
            <div className="revelar">
              <p className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[.14em] text-white ring-1 ring-inset ring-white/25">
                <Icone nome="tesoura" className="h-3.5 w-3.5" />
                Estética animal
              </p>

              <h2 className="mt-5 font-titulo text-3xl font-semibold leading-[1.12] tracking-[-.025em] text-white sm:text-4xl lg:text-[2.75rem]">
                Seu pet limpinho, cheiroso e cheio de estilo!
              </h2>

              <p className="mt-6 max-w-leitura text-[1.0625rem] leading-relaxed text-white/85">
                Além dos cuidados veterinários, a AMEVET também oferece serviços de estética animal para deixar seu
                melhor amigo ainda mais bonito e confortável.
              </p>

              <ul className="mt-8 flex flex-wrap gap-2.5">
                {ETAPAS.map((etapa) => (
                  <li
                    key={etapa}
                    className="rounded-full bg-white/15 px-4 py-2 text-[0.875rem] font-medium text-white ring-1 ring-inset ring-white/20"
                  >
                    {etapa}
                  </li>
                ))}
              </ul>

              <div className="mt-9">
                <Botao href={linkWhatsapp(MENSAGENS.banhoTosa)} externo variante="vermelho" tamanho="lg">
                  <Icone nome="whatsapp" className="h-5 w-5" />
                  Agendar Banho e Tosa
                </Botao>
              </div>

              <p className="mt-5 text-[0.8125rem] text-white/65">
                Tutores destacam o banho e tosa nas avaliações da clínica no Google.
              </p>
            </div>

            {/* Mosaico de fotografias */}
            <div className="revelar grid grid-cols-2 gap-4" data-atraso="120">
              <div className="col-span-2 overflow-hidden rounded-3xl">
                <img
                  src="img/tosa-destaque.webp"
                  alt="Profissional de estética animal finalizando a tosa de um cão"
                  width={800}
                  height={560}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[16/10] w-full object-cover object-top"
                />
              </div>
              <div className="overflow-hidden rounded-3xl">
                <img
                  src="img/tosa-detalhe-1.webp"
                  alt="Cão sendo secado e escovado após o banho"
                  width={700}
                  height={700}
                  loading="lazy"
                  decoding="async"
                  className="aspect-square w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-3xl">
                <img
                  src="img/tosa-detalhe-2.webp"
                  alt="Cão de pequeno porte durante o banho"
                  width={700}
                  height={700}
                  loading="lazy"
                  decoding="async"
                  className="aspect-square w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
