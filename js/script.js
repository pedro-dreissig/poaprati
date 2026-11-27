// Menu responsivo
const botaoMenu = document.querySelector(".menu-toggle");
const navegacao = document.querySelector(".navegacao");

if (botaoMenu && navegacao) {
  botaoMenu.addEventListener("click", () => {
    const aberto = navegacao.classList.toggle("aberto");
    botaoMenu.setAttribute("aria-expanded", aberto);
    botaoMenu.textContent = aberto ? "✕" : "☰";
  });
}

// Busca e filtro dos eventos na página inicial
const campoBusca = document.querySelector("#busca");
const filtroTipo = document.querySelector("#tipo");
const cards = document.querySelectorAll(".card-evento");
const mensagemVazia = document.querySelector("#sem-resultados");

function filtrarEventos() {
  if (!campoBusca || !filtroTipo) return;

  const pesquisa = campoBusca.value.toLowerCase().trim();
  const tipoEscolhido = filtroTipo.value;
  let quantidadeVisivel = 0;

  cards.forEach((card) => {
    const nome = card.dataset.nome || "";
    const tipos = card.dataset.tipo || "";
    const combinaBusca = nome.includes(pesquisa);
    const combinaTipo = tipoEscolhido === "todos" || tipos.includes(tipoEscolhido);
    const mostrar = combinaBusca && combinaTipo;

    card.hidden = !mostrar;
    if (mostrar) quantidadeVisivel++;
  });

  if (mensagemVazia) {
    mensagemVazia.hidden = quantidadeVisivel !== 0;
  }
}

if (campoBusca) campoBusca.addEventListener("input", filtrarEventos);
if (filtroTipo) filtroTipo.addEventListener("change", filtrarEventos);
