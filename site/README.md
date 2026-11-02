# AMEVET — Site institucional

Site de página única para a **AMEVET Clínica Veterinária e Estética Animal**
(Av. Gustavo Adolfo, 2210 — Vila Medeiros, São Paulo/SP).

React 19 · TypeScript · Tailwind CSS · Vite.

- **No ar (provisório):** https://amevet-site.vercel.app
- **Repositório:** https://github.com/1agoRP/amevet-site (privado)

Todo push na branch `main` republica o site automaticamente na Vercel.

---

## Rodando o projeto

```bash
npm install
npm run dev      # ambiente de desenvolvimento em http://localhost:5173
npm run build    # gera a versão de produção em dist/
npm run preview  # serve o conteúdo de dist/ para conferência
npm run marca    # regera logo, favicons e ícones a partir de ../Logo.png
```

A pasta `dist/` é estática: pode ser publicada em Vercel, Netlify, Cloudflare
Pages, GitHub Pages ou em qualquer hospedagem comum.

---

## Onde mexer no conteúdo

Praticamente todo o texto do site vive em **[`src/dados/clinica.ts`](src/dados/clinica.ts)**.
Alterar esse arquivo muda o site inteiro de uma vez — menu, cards de serviço,
depoimentos, rodapé, links de WhatsApp e dados estruturados.

| O que mudar | Onde |
| --- | --- |
| Endereço, telefone, Instagram, nota do Google | `CLINICA` |
| Horário de funcionamento | `HORARIOS` |
| Itens do menu | `MENU` |
| Cards de serviço (nome, texto, foto, mensagem do WhatsApp) | `SERVICOS` |
| Blocos "Por que escolher a AMEVET" | `DIFERENCIAIS` |
| Depoimentos | `DEPOIMENTOS` e `RESUMO_AVALIACOES` |
| Fotos da galeria | `GALERIA` |
| Mensagens automáticas do WhatsApp | `MENSAGENS` |

Cores, fontes e sombras ficam em [`tailwind.config.js`](tailwind.config.js).
Meta tags, Open Graph e Schema.org ficam em [`index.html`](index.html).

---

## ⚠️ Três pontos a confirmar com a clínica antes de publicar

### 1. Horário de funcionamento — **não publicado ainda**

O perfil público do Google não expõe a grade completa de horários, e o briefing
pede para não publicar informação não confirmada. Por isso o site exibe hoje:

> *"Fale com a gente pelo WhatsApp para confirmar os horários de atendimento."*

A grade já está pré-preenchida em `HORARIOS.grade` (segunda a sexta 09h–19h,
sábado 09h–16h, domingo fechado — dados de diretórios de terceiros, **não
confirmados**). Depois que a clínica confirmar:

```ts
// src/dados/clinica.ts
export const HORARIOS = {
  confirmado: true,   // ← trocar para true
  grade: [ /* ajustar se necessário */ ],
```

Os horários passam a aparecer na seção de contato e no rodapé.

### 2. Número do WhatsApp

Todos os botões usam `https://wa.me/551123057686`, o fixo **(11) 2305-7686**,
conforme o briefing. O Instagram oficial também divulga o celular
📱 **(11) 99106-3122**.

Se o WhatsApp da clínica for o celular, basta trocar uma linha:

```ts
// src/dados/clinica.ts
whatsapp: '5511991063122',
```

O telefone para ligação (`tel:`) continua sendo o fixo.

### 3. Fotografias

As fotos atuais são imagens profissionais de banco (Unsplash, uso comercial
liberado) usadas como provisórias — o Instagram da clínica serve as imagens por
URLs assinadas que expiram, então não dá para usá-las direto.

**O ideal é substituir pelas fotos reais da AMEVET.** Basta trocar os arquivos em
`public/img/` mantendo os mesmos nomes — nenhum código precisa mudar:

| Arquivo | Onde aparece |
| --- | --- |
| `hero-pets.webp` / `hero-pets-sm.webp` | Capa (desktop / celular) |
| `clinica-cuidado.webp` | "Conheça a AMEVET" — foto principal |
| `clinica-atendimento.webp` | "Conheça a AMEVET" — foto menor |
| `svc-consulta.webp` | Card Consultas veterinárias |
| `svc-exames.webp` | Card Exames |
| `svc-vacinacao.webp` | Card Vacinas importadas |
| `svc-cirurgia.webp` | Card Cirurgia geral e ortopédica |
| `svc-castracao.webp` | Card Castração |
| `svc-banho-tosa.webp` | Card Banho e tosa |
| `tosa-destaque.webp` | Seção Banho e Tosa — foto grande |
| `tosa-detalhe-1/2.webp` | Seção Banho e Tosa — fotos menores |
| `galeria-1` a `galeria-8.webp` | Galeria |

Recomendado: `.webp`, largura de 800px (1800px na capa), até ~200 KB cada.
Ao trocar uma foto, revise também o texto `alt` correspondente em
`src/dados/clinica.ts` — é o que leitores de tela anunciam.

---

## Antes de colocar no ar

- [ ] Trocar `https://amevet-site.vercel.app` (endereço provisório) pelo domínio
      real em `index.html` (`canonical`, `og:url`, `og:image`, `twitter:image` e
      o bloco JSON-LD) e em `public/robots.txt` / `public/sitemap.xml`.
- [ ] Apontar o domínio definitivo para o projeto na Vercel.
- [ ] Confirmar os horários e ligar `HORARIOS.confirmado`.
- [ ] Confirmar o número do WhatsApp.
- [ ] Substituir as fotos de banco pelas fotos reais da clínica.
- [ ] Cadastrar o site no perfil do Google da clínica (hoje o perfil não tem site).
- [ ] Enviar o `sitemap.xml` pelo Google Search Console.

---

## O que foi verificado nas fontes oficiais

Nada no site foi inventado. O que está publicado veio de:

- **Perfil da clínica no Google** — endereço completo com CEP 02209-000,
  telefone (11) 2305-7686, coordenadas, nota **4,7** com **175 avaliações**,
  e os três depoimentos (Aldi Moreira, Nayara Alcantara, Vanessa Cestari) com a
  resposta da própria clínica.
- **Instagram [@amevet_clinicaveterinaria](https://www.instagram.com/amevet_clinicaveterinaria/)** —
  a lista de serviços sai literalmente da bio: *"Clínica Veterinária e Estética
  Animal. Cirurgia Geral e Ortopédica, Clínica, Castração, Vacinas importadas,
  Exames."*

Não há no site nenhum nome de veterinário, CRMV, preço, prazo ou procedimento
que não apareça nessas fontes.

---

## Estrutura

```
site/
├── index.html              meta tags, Open Graph, Schema.org (VeterinaryCare)
├── public/
│   ├── img/                fotografias
│   ├── logo-amevet.webp    logotipo completo (rodapé)
│   ├── marca-amevet.webp   coração isolado (cabeçalho)
│   ├── icon-*.png          favicons
│   ├── robots.txt
│   └── sitemap.xml
├── scripts/
│   └── gerar-marca.mjs     gera a marca e os ícones a partir de Logo.png
└── src/
    ├── dados/clinica.ts    ← todo o conteúdo do site
    ├── hooks/useRevelar.ts animação de entrada ao rolar
    ├── componentes/
    │   ├── ui/             Botao, Icone
    │   └── *.tsx           uma seção por arquivo
    ├── App.tsx
    └── index.css           tokens e classes de seção
```

## Acessibilidade e performance

- HTML semântico, um único `<h1>`, hierarquia de títulos contínua.
- Link "Pular para o conteúdo", foco visível, menu mobile com `aria-expanded`
  e fechamento pela tecla `Esc`.
- Todas as imagens têm `alt` descritivo; as decorativas usam `aria-hidden`.
- Animações respeitam `prefers-reduced-motion` — sem o JavaScript, ou com
  movimento reduzido, todo o conteúdo nasce visível.
- Imagens em WebP com `loading="lazy"`, exceto a capa (pré-carregada).
- Build de produção: ~80 KB de JS e ~6 KB de CSS compactados.
