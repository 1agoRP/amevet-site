import { DIFERENCIAIS } from '../dados/clinica';
import Icone from './ui/Icone';

export default function Diferenciais() {
  return (
    <section aria-labelledby="titulo-diferenciais" className="bg-nevoa py-20 lg:py-28">
      <div className="container">
        <header className="revelar mx-auto max-w-2xl text-center">
          <p className="olho-magico">
            <Icone nome="pata" className="h-3.5 w-3.5" />
            Por que escolher a AMEVET
          </p>
          <h2 id="titulo-diferenciais" className="titulo-secao mt-5">
            O cuidado que seu pet merece, do jeito que você esperaria.
          </h2>
        </header>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {DIFERENCIAIS.map((diferencial, indice) => (
            <li
              key={diferencial.titulo}
              className="revelar rounded-4xl bg-white p-7 shadow-suave lg:p-8"
              data-atraso={indice * 80}
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-vermelho-claro text-vermelho">
                <Icone nome={diferencial.icone} className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-titulo text-[1.0625rem] font-semibold tracking-[-.01em] text-carvao">
                {diferencial.titulo}
              </h3>
              <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-carvao-suave">{diferencial.texto}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
