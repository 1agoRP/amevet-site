import { CLINICA, GALERIA } from '../dados/clinica';
import Botao from './ui/Botao';
import Icone from './ui/Icone';

export default function Galeria() {
  return (
    <section aria-labelledby="titulo-galeria" className="bg-nevoa py-20 lg:py-28">
      <div className="container">
        <header className="revelar flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="olho-magico">
              <Icone nome="instagram" className="h-3.5 w-3.5" />
              Galeria
            </p>
            <h2 id="titulo-galeria" className="titulo-secao mt-5">
              Um pouco do nosso dia a dia.
            </h2>
            <p className="apoio-secao mt-4">
              Pets atendidos, momentos de cuidado e o resultado do banho e tosa — acompanhe tudo de perto pelo nosso
              Instagram.
            </p>
          </div>

          <Botao href={CLINICA.instagram.url} externo variante="contorno" className="shrink-0 self-start sm:self-auto">
            <Icone nome="instagram" className="h-[1.1rem] w-[1.1rem]" />
            Acompanhe nosso Instagram
          </Botao>
        </header>

        <ul className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 lg:gap-4">
          {GALERIA.map((foto, indice) => (
            <li
              key={foto.src}
              className="revelar aspect-square overflow-hidden rounded-3xl bg-white"
              data-atraso={(indice % 4) * 60}
            >
              <img
                src={foto.src}
                alt={foto.alt}
                width={800}
                height={800}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-[600ms] ease-out hover:scale-[1.05]"
              />
            </li>
          ))}
        </ul>

        <p className="revelar mt-8 text-center text-[0.8125rem] text-carvao-tenue">
          <a
            href={CLINICA.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-turquesa-escuro underline decoration-turquesa/40 underline-offset-4 hover:decoration-turquesa"
          >
            {CLINICA.instagram.usuario}
          </a>{' '}
          — novidades, dicas de cuidado e os pets que passam por aqui.
        </p>
      </div>
    </section>
  );
}
