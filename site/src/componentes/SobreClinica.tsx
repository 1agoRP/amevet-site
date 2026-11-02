import { CLINICA, MENSAGENS, linkWhatsapp } from '../dados/clinica';
import Botao from './ui/Botao';
import Icone from './ui/Icone';

export default function SobreClinica() {
  return (
    <section id="a-clinica" className="scroll-mt-24 py-20 lg:py-28">
      <div className="container grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
        {/* Composição de fotografias */}
        <div className="revelar relative">
          <div className="overflow-hidden rounded-4xl shadow-cartao">
            <img
              src="img/clinica-cuidado.webp"
              alt="Profissional com estetoscópio segurando um filhote no colo"
              width={900}
              height={1200}
              loading="lazy"
              decoding="async"
              className="aspect-[4/5] w-full object-cover sm:aspect-[5/4] lg:aspect-[4/5]"
            />
          </div>

          <div className="absolute -bottom-8 -right-2 hidden w-48 overflow-hidden rounded-3xl border-4 border-white shadow-cartao sm:block lg:-right-8 lg:w-56">
            <img
              src="img/clinica-atendimento.webp"
              alt="Cão sendo atendido na sala de consulta da clínica"
              width={560}
              height={560}
              loading="lazy"
              decoding="async"
              className="aspect-square w-full object-cover"
            />
          </div>

          {/* Selo de avaliação */}
          <div className="absolute -left-2 top-6 flex items-center gap-2.5 rounded-2xl bg-white px-4 py-3 shadow-cartao lg:-left-8">
            <Icone nome="estrela" className="h-5 w-5 text-[#FFC043]" />
            <span className="leading-tight">
              <span className="block font-titulo text-base font-bold text-carvao">
                {CLINICA.avaliacaoGoogle.nota.toString().replace('.', ',')}
              </span>
              <span className="block text-[0.6875rem] font-medium uppercase tracking-wider text-carvao-tenue">
                no Google
              </span>
            </span>
          </div>
        </div>

        {/* Texto */}
        <div className="revelar" data-atraso="120">
          <p className="olho-magico">
            <Icone nome="coracao" className="h-3.5 w-3.5" />
            Conheça a AMEVET
          </p>

          <h2 className="titulo-secao mt-5">Mais do que cuidar de animais, cuidamos de membros da sua família.</h2>

          <p className="apoio-secao mt-6">
            A AMEVET é uma clínica veterinária e estética animal dedicada ao cuidado e bem-estar dos pets. Nosso
            propósito é proporcionar uma experiência acolhedora aos animais e tranquilidade aos seus tutores.
          </p>

          <p className="apoio-secao mt-4">
            Estamos na {CLINICA.endereco.logradouro}, na {CLINICA.endereco.bairro}, atendendo tutores de toda a Zona
            Norte de São Paulo — com consultas, exames, vacinas, cirurgias e banho e tosa no mesmo endereço.
          </p>

          <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-7 border-t border-carvao/10 pt-8 sm:grid-cols-3">
            <div>
              <dt className="text-[0.8125rem] font-medium text-carvao-tenue">Avaliação no Google</dt>
              <dd className="mt-1 font-titulo text-2xl font-semibold text-carvao">
                {CLINICA.avaliacaoGoogle.nota.toString().replace('.', ',')}
                <span className="ml-1 text-base font-medium text-carvao-tenue">/ 5</span>
              </dd>
            </div>
            <div>
              <dt className="text-[0.8125rem] font-medium text-carvao-tenue">Avaliações de tutores</dt>
              <dd className="mt-1 font-titulo text-2xl font-semibold text-carvao">
                {CLINICA.avaliacaoGoogle.quantidade}
              </dd>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <dt className="text-[0.8125rem] font-medium text-carvao-tenue">Atendemos</dt>
              <dd className="mt-1 font-titulo text-2xl font-semibold text-carvao">Cães e gatos</dd>
            </div>
          </dl>

          <div className="mt-9 flex flex-wrap gap-3">
            <Botao href={linkWhatsapp(MENSAGENS.geral)} externo variante="turquesa">
              <Icone nome="whatsapp" className="h-[1.1rem] w-[1.1rem]" />
              Falar com a clínica
            </Botao>
            <Botao href="#contato" variante="contorno">
              Ver localização
              <Icone nome="seta" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Botao>
          </div>
        </div>
      </div>
    </section>
  );
}
