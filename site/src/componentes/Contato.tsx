import { CLINICA, HORARIOS, MENSAGENS, linkWhatsapp } from '../dados/clinica';
import Icone from './ui/Icone';

const ACOES = [
  {
    icone: 'whatsapp' as const,
    rotulo: 'Conversar pelo WhatsApp',
    detalhe: 'Resposta no mesmo canal que você já usa',
    href: linkWhatsapp(MENSAGENS.geral),
    externo: true,
    destaque: true,
  },
  {
    icone: 'telefone' as const,
    rotulo: 'Ligar para a clínica',
    detalhe: CLINICA.telefone.exibicao,
    href: `tel:${CLINICA.telefone.discagem}`,
    externo: false,
    destaque: false,
  },
  {
    icone: 'rota' as const,
    rotulo: 'Como chegar',
    detalhe: 'Abrir a rota no Google Maps',
    href: CLINICA.googleMaps.rotas,
    externo: true,
    destaque: false,
  },
];

export default function Contato() {
  return (
    <section id="contato" className="scroll-mt-24 py-20 lg:py-28">
      <div className="container">
        <header className="revelar mx-auto max-w-2xl text-center">
          <p className="olho-magico">
            <Icone nome="pino" className="h-3.5 w-3.5" />
            Localização e contato
          </p>
          <h2 className="titulo-secao mt-5">Estamos pertinho de você, na Vila Medeiros.</h2>
          <p className="apoio-secao mx-auto mt-5">
            Venha nos visitar ou fale com a gente pelo WhatsApp — respondemos suas dúvidas e ajudamos a encontrar o
            melhor horário para o seu pet.
          </p>
        </header>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.15fr] lg:gap-8">
          {/* Dados e ações */}
          <div className="revelar flex flex-col gap-6">
            <div className="rounded-4xl border border-carvao/10 bg-white p-7 shadow-suave lg:p-8">
              <h3 className="font-titulo text-xl font-semibold tracking-[-.015em] text-carvao">
                {CLINICA.nomeCompleto}
              </h3>

              <dl className="mt-6 space-y-5">
                <div className="flex gap-3.5">
                  <Icone nome="pino" className="mt-0.5 h-5 w-5 shrink-0 text-turquesa" />
                  <div>
                    <dt className="text-[0.75rem] font-semibold uppercase tracking-wider text-carvao-tenue">
                      Endereço
                    </dt>
                    <dd className="mt-1 text-[0.9375rem] leading-relaxed text-carvao">
                      {CLINICA.endereco.logradouro}
                      <br />
                      {CLINICA.endereco.bairro} — {CLINICA.endereco.cidade}/{CLINICA.endereco.uf}
                      <br />
                      CEP {CLINICA.endereco.cep}
                    </dd>
                  </div>
                </div>

                <div className="flex gap-3.5">
                  <Icone nome="telefone" className="mt-0.5 h-5 w-5 shrink-0 text-turquesa" />
                  <div>
                    <dt className="text-[0.75rem] font-semibold uppercase tracking-wider text-carvao-tenue">
                      Telefone
                    </dt>
                    <dd className="mt-1">
                      <a
                        href={`tel:${CLINICA.telefone.discagem}`}
                        className="text-[0.9375rem] font-medium text-carvao transition-colors hover:text-turquesa-escuro"
                      >
                        {CLINICA.telefone.exibicao}
                      </a>
                    </dd>
                  </div>
                </div>

                <div className="flex gap-3.5">
                  <Icone nome="relogio" className="mt-0.5 h-5 w-5 shrink-0 text-turquesa" />
                  <div>
                    <dt className="text-[0.75rem] font-semibold uppercase tracking-wider text-carvao-tenue">
                      Horário de atendimento
                    </dt>
                    <dd className="mt-1 text-[0.9375rem] leading-relaxed text-carvao">
                      {HORARIOS.confirmado ? (
                        <ul className="space-y-1">
                          {HORARIOS.grade.map((linha) => (
                            <li key={linha.dias} className="flex justify-between gap-6">
                              <span>{linha.dias}</span>
                              <span className="font-medium text-carvao-suave">{linha.horario}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <span className="text-carvao-suave">{HORARIOS.avisoNaoConfirmado}</span>
                      )}
                    </dd>
                  </div>
                </div>
              </dl>
            </div>

            <ul className="grid gap-3">
              {ACOES.map((acao) => (
                <li key={acao.rotulo}>
                  <a
                    href={acao.href}
                    {...(acao.externo ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className={`group flex items-center gap-4 rounded-3xl px-6 py-4 transition-all ${
                      acao.destaque
                        ? 'bg-vermelho text-white shadow-suave hover:bg-vermelho-escuro hover:shadow-cartao'
                        : 'border border-carvao/10 bg-white text-carvao hover:border-turquesa hover:bg-turquesa-claro'
                    }`}
                  >
                    <Icone
                      nome={acao.icone}
                      className={`h-5 w-5 shrink-0 ${acao.destaque ? 'text-white' : 'text-turquesa'}`}
                    />
                    <span className="flex-1 leading-tight">
                      <span className="block font-titulo text-[0.9375rem] font-semibold">{acao.rotulo}</span>
                      <span className={`block text-[0.8125rem] ${acao.destaque ? 'text-white/75' : 'text-carvao-tenue'}`}>
                        {acao.detalhe}
                      </span>
                    </span>
                    <Icone
                      nome="seta"
                      className={`h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5 ${
                        acao.destaque ? 'text-white/70' : 'text-carvao-tenue'
                      }`}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Mapa */}
          <div className="revelar overflow-hidden rounded-4xl border border-carvao/10 shadow-suave" data-atraso="120">
            <iframe
              title={`Mapa com a localização da ${CLINICA.nomeCompleto}`}
              src={CLINICA.googleMaps.incorporado}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[22rem] w-full border-0 sm:h-[26rem] lg:h-full lg:min-h-[32rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
