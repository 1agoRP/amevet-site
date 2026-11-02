import { CLINICA, SERVICOS, linkWhatsapp } from '../dados/clinica';
import Icone from './ui/Icone';

export default function Servicos() {
  return (
    <section id="servicos" className="scroll-mt-24 bg-nevoa py-20 lg:py-28">
      <div className="container">
        <header className="revelar mx-auto max-w-2xl text-center">
          <p className="olho-magico">
            <Icone nome="estetoscopio" className="h-3.5 w-3.5" />
            Nossos serviços
          </p>
          <h2 className="titulo-secao mt-5">Tudo o que seu pet precisa, em um só endereço.</h2>
          <p className="apoio-secao mx-auto mt-5">
            Da consulta de rotina à estética animal — serviços confirmados pela própria clínica, prestados com calma
            e atenção a cada animal.
          </p>
        </header>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICOS.map((servico, indice) => (
            <li
              key={servico.id}
              className="revelar group flex flex-col overflow-hidden rounded-4xl bg-white shadow-suave transition-shadow duration-300 hover:shadow-cartao"
              data-atraso={(indice % 3) * 90}
            >
              <div className="relative aspect-[16/11] overflow-hidden">
                <img
                  src={servico.imagem}
                  alt={servico.alt}
                  width={800}
                  height={550}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.04]"
                />
                {servico.destaque && (
                  <span className="absolute left-4 top-4 rounded-full bg-turquesa px-3 py-1 text-[0.6875rem] font-semibold uppercase tracking-[.1em] text-white">
                    Estética animal
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col p-6 lg:p-7">
                <h3 className="font-titulo text-xl font-semibold tracking-[-.015em] text-carvao">{servico.nome}</h3>
                <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-carvao-suave">{servico.descricao}</p>

                <a
                  href={linkWhatsapp(servico.mensagem)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 self-start rounded-full border border-carvao/15 px-4 py-2 font-titulo text-[0.875rem] font-semibold text-carvao transition-colors hover:border-turquesa hover:bg-turquesa-claro hover:text-turquesa-escuro"
                >
                  <Icone nome="whatsapp" className="h-4 w-4" />
                  Agendar
                  <span className="sr-only"> {servico.nome.toLowerCase()} pelo WhatsApp</span>
                </a>
              </div>
            </li>
          ))}
        </ul>

        <p className="revelar mt-10 text-center text-sm text-carvao-tenue">
          Procura algo que não está na lista?{' '}
          <a
            href={linkWhatsapp('Olá! Encontrei a AMEVET pelo site e gostaria de saber se vocês atendem um caso específico.')}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-turquesa-escuro underline decoration-turquesa/40 underline-offset-4 hover:decoration-turquesa"
          >
            Pergunte pelo WhatsApp
          </a>{' '}
          ou ligue para {CLINICA.telefone.exibicao}.
        </p>
      </div>
    </section>
  );
}
