import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// base relativo: o site funciona tanto na raiz de um domínio quanto
// servido a partir de uma subpasta (previews, hospedagens estáticas).
export default defineConfig({
  base: './',
  plugins: [react()],
});
