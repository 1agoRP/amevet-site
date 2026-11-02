import BanhoTosa from './componentes/BanhoTosa';
import BotaoWhatsapp from './componentes/BotaoWhatsapp';
import Cabecalho from './componentes/Cabecalho';
import Contato from './componentes/Contato';
import Depoimentos from './componentes/Depoimentos';
import Diferenciais from './componentes/Diferenciais';
import Galeria from './componentes/Galeria';
import Hero from './componentes/Hero';
import Rodape from './componentes/Rodape';
import Servicos from './componentes/Servicos';
import SobreClinica from './componentes/SobreClinica';
import { useRevelar } from './hooks/useRevelar';

export default function App() {
  useRevelar();

  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-carvao focus:px-5 focus:py-3 focus:font-titulo focus:text-sm focus:font-semibold focus:text-white"
      >
        Pular para o conteúdo
      </a>

      <Cabecalho />

      <main id="conteudo">
        <Hero />
        <SobreClinica />
        <Servicos />
        <BanhoTosa />
        <Diferenciais />
        <Depoimentos />
        <Galeria />
        <Contato />
      </main>

      <Rodape />
      <BotaoWhatsapp />
    </>
  );
}
