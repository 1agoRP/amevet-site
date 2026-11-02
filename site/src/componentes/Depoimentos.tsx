import { CLINICA, DEPOIMENTOS, RESUMO_AVALIACOES } from '../dados/clinica';
import Botao from './ui/Botao';
import Icone from './ui/Icone';

function Estrelas({ nota }: { nota: number }) {
  return (
    <span className="flex gap-0.5" role="img" aria-label={`${nota} de 5 estrelas`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Icone key={i} nome="estrela" className={`h-4 w-4 ${i < nota ? 'text-[#FFC043]' : 'text-carvao/15'}`} />
      ))}
    </span>
  );
}

export default function Depoimentos() {
  const { nota, quantidade } = CLINICA.avaliacaoGoogle;

  return (
    <section id="depoimentos" className="scroll-mt-24 py-20 lg:py-28">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:gap-16">
          {/* Resumo da nota */}
          <div className="revelar lg:sticky lg:top-28 lg:self-start">
            <p className="olho-magico">
              <Icone nome="estrela" className="h-3.5 w-3.5" />
              Depoimentos
            </p>
            <h2 className="titulo-secao mt-5">O que os tutores dizem sobre a gente.</h2>

            <div className="mt-8 rounded-4xl border border-carvao/10 bg-white p-7 shadow-suave">
              <div className="flex items-end gap-3">
                <span className="font-titulo text-5xl font-semibold leading-none tracking-[-.03em] text-carvao">
                  {nota.toString().replace('.', ',')}
                </span>
                <span className="pb-1">
                  <Estrelas nota={Math.round(nota)} />
                  <span className="mt-1.5 block text-[0.8125rem] text-carvao-tenue">
                    {quantidade} avaliações no Google
                  </span>
                </span>
              </div>

              <ul className="mt-6 space-y-2.5 border-t border-carvao/10 pt-6">
                {RESUMO_AVALIACOES.map((trecho) => (
                  <li key={trecho} className="flex gap-2.5 text-[0.875rem] leading-relaxed text-carvao-suave">
                    <Icone nome="coracao" className="mt-0.5 h-4 w-4 shrink-0 text-vermelho" />
                    <span>&ldquo;{trecho}&rdquo;</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7">
                <Botao href={CLINICA.googleMaps.url} externo variante="contorno" className="w-full">
                  Ver todas as avaliações
                  <Icone nome="seta" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Botao>
              </div>
            </div>
          </div>

          {/* Avaliações */}
          <ul className="space-y-5">
            {DEPOIMENTOS.map((depoimento, indice) => (
              <li
                key={depoimento.autor}
                className="revelar rounded-4xl bg-nevoa p-7 lg:p-8"
                data-atraso={indice * 90}
              >
                <figure>
                  <div className="flex items-center justify-between gap-4">
                    <Estrelas nota={depoimento.nota} />
                    <span className="text-[0.8125rem] text-carvao-tenue">{depoimento.quando}</span>
                  </div>

                  <blockquote className="mt-4 text-[1.0625rem] leading-relaxed text-carvao">
                    &ldquo;{depoimento.texto}&rdquo;
                  </blockquote>

                  <figcaption className="mt-5 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-turquesa-claro font-titulo text-sm font-bold text-turquesa-escuro">
                      {depoimento.autor.charAt(0)}
                    </span>
                    <span className="leading-tight">
                      <span className="block font-titulo text-[0.9375rem] font-semibold text-carvao">
                        {depoimento.autor}
                      </span>
                      <span className="block text-[0.75rem] text-carvao-tenue">Avaliação publicada no Google</span>
                    </span>
                  </figcaption>

                  {depoimento.resposta && (
                    <p className="mt-5 rounded-2xl border-l-2 border-turquesa bg-white px-5 py-4 text-[0.875rem] leading-relaxed text-carvao-suave">
                      <span className="mb-1 block font-titulo text-[0.75rem] font-semibold uppercase tracking-wider text-turquesa-escuro">
                        Resposta da AMEVET
                      </span>
                      {depoimento.resposta}
                    </p>
                  )}
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
