import { useEffect } from 'react';

/**
 * Revela os elementos `.revelar` conforme eles entram na tela.
 *
 * A classe `js` no <html> é o interruptor: sem JavaScript — ou se o visitante
 * pediu menos movimento — o conteúdo já nasce visível e nada é animado.
 */
export function useRevelar() {
  useEffect(() => {
    const raiz = document.documentElement;
    const menosMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (menosMovimento || !('IntersectionObserver' in window)) return;

    raiz.classList.add('js');

    const observador = new IntersectionObserver(
      (entradas) => {
        for (const entrada of entradas) {
          if (!entrada.isIntersecting) continue;
          const alvo = entrada.target as HTMLElement;
          const atraso = Number(alvo.dataset.atraso ?? 0);
          window.setTimeout(() => alvo.setAttribute('data-visivel', 'true'), atraso);
          observador.unobserve(alvo);
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.08 },
    );

    document.querySelectorAll('.revelar').forEach((elemento) => observador.observe(elemento));

    return () => {
      observador.disconnect();
      raiz.classList.remove('js');
    };
  }, []);
}
