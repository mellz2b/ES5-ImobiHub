# ImobiHub - Gerenciador de Imoveis

Aplicacao web para imobiliaria com foco no ODS 11 (Cidades e Comunidades Sustentaveis).

## Modulos

- Site publico: catalogo de imoveis em `app/page.tsx`
- Dashboard: painel de gestao em `app/dashboard/page.tsx`

## Funcionalidades implementadas

- Adicionar imovel no dashboard
- Editar preco por anuncio
- Subir fotos (armazenadas em base64 no navegador)
- Marcar anuncio como vendido
- Exibir catalogo publico com filtro para vendidos

## Persistencia

Os dados sao persistidos no `localStorage` por meio de `lib/property-store.ts`.

## Executar localmente

```bash
npm install
npm run dev
```

Aplicacao disponivel em `http://localhost:3000`.

## Build de producao

```bash
npm run build
npm run start
```
