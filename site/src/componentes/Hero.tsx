import { CLINICA, MENSAGENS, linkWhatsapp } from '../dados/clinica';
import Botao from './ui/Botao';
import Icone from './ui/Icone';

const INDICADORES = [
  {
    icone: 'estrela' as const,
    destaque: CLINICA.avaliacaoGoogle.nota.toString().replace('.', ','),
    texto: `${CLINICA.avaliacaoGoogle.quantidade} avaliações no Google`,
  },
  {
    icone: 'pino' as const,
    destaque: CLINICA.endereco.bairro,
    texto: 'Zona Norte de São Paulo',
  },
  {
    icone: 'pata' as const,
    destaque: 'Clínica + Estética',
    texto: 'Cães e gatos no mesmo lugar',
  },
];

export default function Hero() {
  return (
    <section id="inicio" className="relative isolate flex min-h-[38rem] items-center overflow-hidden lg:min-h-[44rem]">
      <picture>
        <source media="(max-width: 640px)" srcSet="img/hero-pets-sm.webp" />
        <img
          src="img/hero-pets.webp"
          alt="Um cão e um gato deitados juntos, descansando lado a lado"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
          width={1800}
          height={1200}
          fetchPriority="high"
          decoding="async"
        />
      </picture>

      {/* Véus de contraste: horizontal para o texto, vertical para o cabeçalho */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-t from-carvao/95 via-carvao/80 to-carvao/45 sm:bg-gradient-to-r sm:to-carvao/40"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-carvao/70 to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-white/95 to-transparent"
        aria-hidden="true"
      />

      <div className="container relative pb-24 pt-32 lg:pb-32 lg:pt-36">
        <div className="max-w-2xl">
          <p className="animate-sobe-suave inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[.14em] text-white ring-1 ring-inset ring-white/25 backdrop-blur-sm">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-pulsar rounded-full bg-turquesa" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-turquesa" />
            </span>
            {CLINICA.endereco.bairro} · São Paulo
          </p>

          <h1
            className="animate-sobe-suave mt-6 font-titulo text-[2.15rem] font-semibold leading-[1.08] tracking-[-.03em] text-white sm:text-5xl lg:text-[3.6rem]"
            style={{ animationDelay: '80ms' }}
          >
            Carinho, cuidado e saúde para quem faz parte da sua família.
          </h1>

          <p
            className="animate-sobe-suave mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-white/85 lg:text-lg"
            style={{ animationDelay: '160ms' }}
          >
            Na AMEVET, seu pet recebe atenção especial, cuidado veterinário e serviços de estética animal em um
            ambiente preparado para receber quem você mais ama.
          </p>

          <div
            className="animate-sobe-suave mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={{ animationDelay: '240ms' }}
          >
            <Botao href={linkWhatsapp(MENSAGENS.agendamento)} externo variante="vermelho" tamanho="lg">
              <Icone nome="whatsapp" className="h-5 w-5" />
              Agendar atendimento
            </Botao>
            <Botao href="#servicos" variante="claro" tamanho="lg">
              Conheça nossos serviços
              <Icone nome="seta" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Botao>
          </div>

          <ul
            className="animate-sobe-suave mt-12 grid max-w-xl grid-cols-1 gap-x-8 gap-y-4 border-t border-white/15 pt-7 sm:grid-cols-3"
            style={{ animationDelay: '320ms' }}
          >
            {INDICADORES.map((indicador) => (
              <li key={indicador.destaque} className="flex items-start gap-2.5">
                <Icone
                  nome={indicador.icone}
                  className={`mt-0.5 h-[1.15rem] w-[1.15rem] shrink-0 ${
                    indicador.icone === 'estrela' ? 'text-[#FFC043]' : 'text-turquesa'
                  }`}
                />
                <span className="leading-tight">
                  <span className="block font-titulo text-[0.9375rem] font-semibold text-white">
                    {indicador.destaque}
                  </span>
                  <span className="block text-[0.8125rem] text-white/65">{indicador.texto}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
