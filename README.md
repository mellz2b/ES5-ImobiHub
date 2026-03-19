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

## Versao PHP (estrutura limpa e organizada)

Tambem foi criada uma versao em PHP em `php-app/`, com:

- Catalogo publico com filtros e busca
- Dashboard de gestao com cadastro de imovel
- Edicao de preco por anuncio
- Upload de fotos para pasta local
- Alternancia de status vendido/disponivel
- Persistencia em SQLite

### Estrutura principal

- `php-app/public/index.php`: catalogo publico
- `php-app/public/dashboard.php`: painel administrativo
- `php-app/src/PropertyRepository.php`: regras de acesso a dados
- `php-app/src/Database.php`: conexao e schema
- `php-app/src/helpers.php`: funcoes utilitarias

### Como executar

1. Instale PHP 8.1+ no sistema.
2. No terminal, rode:

```bash
cd php-app
php -S localhost:8000 -t public
```

3. Acesse:

- `http://localhost:8000/index.php`
- `http://localhost:8000/dashboard.php`
