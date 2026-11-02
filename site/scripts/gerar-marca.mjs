/**
 * Gera os assets da marca AMEVET a partir do logotipo oficial (Logo.png).
 *
 * Saídas em public/:
 *   logo-amevet.webp     logotipo completo (coração + AMEVET + assinatura)
 *   marca-amevet.webp    somente o coração, usado no cabeçalho
 *   icon-32.png          favicon
 *   apple-touch-icon.png ícone iOS (fundo branco)
 *   icon-512.png         ícone PWA / compartilhamento
 *
 * Uso: npm run marca
 */
import sharp from 'sharp';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const raiz = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const ORIGEM = path.resolve(raiz, '..', 'Logo.png');
const PUB = path.join(raiz, 'public');

/** Transforma o fundo branco do logotipo em transparência. */
async function comFundoTransparente(arquivo) {
  const { data, info } = await sharp(arquivo).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  for (let i = 0; i < data.length; i += 4) {
    if (data[i] > 243 && data[i + 1] > 243 && data[i + 2] > 243) data[i + 3] = 0;
  }
  return sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } }).png().toBuffer();
}

const transparente = await comFundoTransparente(ORIGEM);
const completo = await sharp(transparente).trim({ threshold: 1 }).png().toBuffer();
const { width, height } = await sharp(completo).metadata();

// Logotipo completo
await sharp(completo).resize({ width: 560 }).webp({ quality: 92 }).toFile(path.join(PUB, 'logo-amevet.webp'));

// Só o coração: a parte superior da arte, antes do lettering
const coracao = await sharp(completo)
  .extract({ left: 0, top: 0, width, height: Math.round(height * 0.735) })
  .png()
  .toBuffer();
const coracaoAjustado = await sharp(coracao).trim({ threshold: 1 }).png().toBuffer();

await sharp(coracaoAjustado).resize({ width: 360 }).webp({ quality: 92 }).toFile(path.join(PUB, 'marca-amevet.webp'));

// Ícones
const icones = [
  { nome: 'icon-32.png', tamanho: 32, fundo: { r: 0, g: 0, b: 0, alpha: 0 } },
  { nome: 'icon-512.png', tamanho: 512, fundo: { r: 0, g: 0, b: 0, alpha: 0 } },
  { nome: 'apple-touch-icon.png', tamanho: 180, fundo: '#ffffff' },
];
for (const { nome, tamanho, fundo } of icones) {
  const arte = await sharp(coracaoAjustado)
    .resize({ width: Math.round(tamanho * 0.88), height: Math.round(tamanho * 0.88), fit: 'inside' })
    .toBuffer();
  await sharp({ create: { width: tamanho, height: tamanho, channels: 4, background: fundo } })
    .composite([{ input: arte, gravity: 'center' }])
    .png({ compressionLevel: 9 })
    .toFile(path.join(PUB, nome));
}

console.log(`Marca gerada a partir de ${width}x${height}px.`);
