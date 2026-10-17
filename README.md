# 🍕 Pizzaria Heróis do Sabor

Site institucional da **Pizzaria Heróis do Sabor**, pizzaria temática de Farroupilha/RS. Tele-entrega e retirada todos os dias a partir das 18h.

**🔗 Site no ar:** https://juancarlos-qw.github.io/pizzaria-herois-do-sabor/

---

## ✨ Destaques

- **Cenário com parallax:** uma foto fixa fica atrás da página, se move com a rolagem e troca suavemente na seção final.
- **Animações de entrada:** as letras do título sobem uma a uma, e textos e fotos aparecem conforme a rolagem.
- **Pedidos em um clique:** janelas com links diretos para o cardápio online, o WhatsApp, o telefone e o Google Maps.
- **Sabores:** lista de pizzas tradicionais e doces, com link para o cardápio completo.
- **Mural de fotos:** grid com fotos da casa, que ampliam ao clicar.
- **Selo flutuante "Peça agora":** aparece depois do topo e leva direto ao cardápio.
- **Responsivo:** funciona em computador, tablet e celular.
- **Acessível:** respeita a configuração de "reduzir movimento" do sistema e tem navegação por teclado e link para pular ao conteúdo.

## 🛠️ Tecnologias

- HTML, CSS e JavaScript puros, sem frameworks e sem etapa de build
- Fontes do [Google Fonts](https://fonts.google.com/): Anton, Archivo e Caveat Brush
- Hospedagem gratuita no [GitHub Pages](https://pages.github.com/)

## 📁 Estrutura

```
├── index.html        # Conteúdo e estrutura da página
├── style.css         # Visual, cores, fontes e animações
├── script.js         # Janelas de pedido, menu, rolagem e efeitos
└── assets/web/       # Imagens otimizadas usadas no site
```

## 🚀 Como rodar localmente

Não precisa instalar nada. Basta abrir o arquivo `index.html` no navegador.

Para testar como em um servidor real, rode na pasta do projeto:

```bash
npx serve .
```

## ✏️ Como editar o conteúdo

| O que mudar | Onde |
|---|---|
| Textos, sabores, horário e endereço | `index.html` |
| Telefone, WhatsApp, cardápio, Instagram e Maps | Constante `LINKS` no início do `script.js` (o telefone e os links também aparecem no `index.html`) |
| Textos das janelas de pedido | Constante `DIALOGS` no `script.js` |
| Cores do site | Variáveis no topo do `style.css` (`--ink`, `--mustard`, `--tomato`...) |
| Fotos | Pasta `assets/web/`. Use imagens com até ~1000px de largura para manter o site leve |

Depois de editar, publique com `git add .`, `git commit -m "mensagem"` e `git push`. O GitHub Pages atualiza o site em cerca de 1 minuto.

## 📸 Créditos das imagens

- **Fotos dos produtos e logo:** Pizzaria Heróis do Sabor ([@pizzariaheroisdosabor](https://www.instagram.com/pizzariaheroisdosabor/))
- **Fotos de fundo** ([Licença Unsplash](https://unsplash.com/license), uso comercial gratuito):
  - [Pizza no forno a lenha](https://unsplash.com/photos/pizza-baking-in-wood-fired-oven-vHRFraV4U00), por Fabrizio Pullara
  - [Pizza de calabresa](https://unsplash.com/photos/pepperoni-pizza-SU1LFoeEUkk), por Alan Hardman

## 📍 Contato da pizzaria

- **Endereço:** Rua Vêneto, 310, sala 100, Nova Vicenza, Farroupilha/RS
- **Pedidos:** (54) 99122-1339
- **Cardápio online:** https://app.cardapioweb.com/pizzariaheroisdosabor
- **Instagram:** [@pizzariaheroisdosabor](https://www.instagram.com/pizzariaheroisdosabor/)

---

© 2026 Pizzaria Heróis do Sabor. A marca, a logo e as fotos dos produtos pertencem à pizzaria.
