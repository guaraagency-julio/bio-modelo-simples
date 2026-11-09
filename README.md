# Bio Modelo Simples — Guará Agency

Modelo estático e responsivo estilo Linktree. Ana Lemos é uma personagem fictícia, com fotografia ilustrativa.

## Personalização

Edite config.js: nome, bio, foto, botões, URLs e redes sociais. URLs vazias exibem um aviso de demonstração; preencha com https://, mailto: ou tel:. Em styles.css, personalize as variáveis de cores em :root. A preferência claro/escuro é salva localmente.

## Publicar com GitHub Actions

Em **Settings → Pages → Build and deployment**, escolha **GitHub Actions**. O arquivo `.github/workflows/deploy.yml` publica automaticamente o conteúdo estático a cada push na branch main, e também permite disparar pela aba Actions. Não é necessário selecionar "Deploy from a branch".

URL: https://guaraagency-julio.github.io/bio-modelo-simples/

Para usar no domínio de outro site, copie index.html, styles.css, config.js e app.js para uma pasta /bio/ do site do cliente. Os caminhos já são relativos.

Sem build, framework, servidor ou rastreadores. A foto remota deve ser trocada por imagem autorizada do cliente antes da entrega.
