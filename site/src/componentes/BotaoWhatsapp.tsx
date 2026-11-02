import { useEffect, useState } from 'react';
import { MENSAGENS, linkWhatsapp } from '../dados/clinica';
import Icone from './ui/Icone';

/** Botão flutuante de WhatsApp — aparece depois que o visitante passa do hero. */
export default function BotaoWhatsapp() {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const aoRolar = () => setVisivel(window.scrollY > 520);
    aoRolar();
    window.addEventListener('scroll', aoRolar, { passive: true });
    return () => window.removeEventListener('scroll', aoRolar);
  }, []);

  return (
    <a
      href={linkWhatsapp(MENSAGENS.geral)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar com a AMEVET pelo WhatsApp"
      className={`fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-turquesa text-white shadow-flutuante transition-all duration-300 hover:bg-turquesa-escuro sm:bottom-7 sm:right-7 ${
        visivel ? 'translate-y-0 scale-100 opacity-100' : 'pointer-events-none translate-y-4 scale-90 opacity-0'
      }`}
    >
      <span className="absolute inset-0 animate-pulsar rounded-full bg-turquesa" aria-hidden="true" />
      <Icone nome="whatsapp" className="relative h-7 w-7" />
    </a>
  );
}
