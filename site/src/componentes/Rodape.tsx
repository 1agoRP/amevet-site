import { ASSINATURA, CLINICA, HORARIOS, MENSAGENS, MENU, SERVICOS, linkWhatsapp } from '../dados/clinica';
import Icone from './ui/Icone';

/** Ano da publicação — fixado fora do render para não variar entre renderizações. */
const ANO = new Date().getFullYear();

export default function Rodape() {

  return (
    <footer className="bg-carvao text-white/70">
      <div className="container py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:gap-10">
          {/* Marca */}
          <div>
            <img
              src="logo-amevet.webp"
              alt={CLINICA.nomeCompleto}
              width={200}
              height={150}
              loading="lazy"
              decoding="async"
              className="h-20 w-auto brightness-0 invert"
            />
            <p className="mt-6 max-w-xs text-[0.9375rem] leading-relaxed">
              Clínica veterinária e estética animal na Vila Medeiros, Zona Norte de São Paulo. Cuidando com carinho de
              quem faz parte da sua família.
            </p>

            <a
              href={CLINICA.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2.5 text-[0.875rem] font-medium text-white transition-colors hover:bg-white/15"
            >
              <Icone nome="instagram" className="h-[1.1rem] w-[1.1rem]" />
              {CLINICA.instagram.usuario}
            </a>
          </div>

          {/* Links rápidos */}
          <nav aria-label="Links rápidos">
            <h2 className="font-titulo text-[0.8125rem] font-semibold uppercase tracking-[.14em] text-white">
              Navegação
            </h2>
            <ul className="mt-5 space-y-3">
              {MENU.map((item) => (
                <li key={item.ancora}>
                  <a href={item.ancora} className="text-[0.9375rem] transition-colors hover:text-white">
                    {item.rotulo}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Serviços */}
          <nav aria-label="Serviços">
            <h2 className="font-titulo text-[0.8125rem] font-semibold uppercase tracking-[.14em] text-white">
              Serviços
            </h2>
            <ul className="mt-5 space-y-3">
              {SERVICOS.map((servico) => (
                <li key={servico.id}>
                  <a
                    href={linkWhatsapp(servico.mensagem)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[0.9375rem] transition-colors hover:text-white"
                  >
                    {servico.nome}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contato */}
          <div>
            <h2 className="font-titulo text-[0.8125rem] font-semibold uppercase tracking-[.14em] text-white">
              Contato
            </h2>

            <address className="mt-5 space-y-4 not-italic">
              <p className="flex gap-3 text-[0.9375rem] leading-relaxed">
                <Icone nome="pino" className="mt-0.5 h-[1.1rem] w-[1.1rem] shrink-0 text-turquesa" />
                <span>
                  {CLINICA.endereco.logradouro}
                  <br />
                  {CLINICA.endereco.bairro} — {CLINICA.endereco.cidade}/{CLINICA.endereco.uf}
                  <br />
                  CEP {CLINICA.endereco.cep}
                </span>
              </p>

              <p className="flex gap-3 text-[0.9375rem]">
                <Icone nome="telefone" className="mt-0.5 h-[1.1rem] w-[1.1rem] shrink-0 text-turquesa" />
                <a href={`tel:${CLINICA.telefone.discagem}`} className="transition-colors hover:text-white">
                  {CLINICA.telefone.exibicao}
                </a>
              </p>

              <p className="flex gap-3 text-[0.9375rem] leading-relaxed">
                <Icone nome="relogio" className="mt-0.5 h-[1.1rem] w-[1.1rem] shrink-0 text-turquesa" />
                {HORARIOS.confirmado ? (
                  <span>
                    {HORARIOS.grade.map((linha) => (
                      <span key={linha.dias} className="block">
                        {linha.dias}: {linha.horario}
                      </span>
                    ))}
                  </span>
                ) : (
                  <span>{HORARIOS.avisoNaoConfirmado}</span>
                )}
              </p>
            </address>

            <a
              href={linkWhatsapp(MENSAGENS.agendamento)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-vermelho px-5 py-2.5 font-titulo text-[0.9375rem] font-semibold text-white transition-colors hover:bg-vermelho-escuro"
            >
              <Icone nome="whatsapp" className="h-[1.1rem] w-[1.1rem]" />
              Agendar pelo WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-7 text-[0.8125rem] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {ANO} {CLINICA.nomeCompleto}. Todos os direitos reservados.
          </p>
          <p>
            Site por{' '}
            <a
              href={ASSINATURA.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-white/85 underline decoration-white/25 underline-offset-4 transition-colors hover:text-white hover:decoration-white/60"
            >
              {ASSINATURA.nome}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
