// Função para mudar o tema do site para dark
function mudarTema() {
  document.body.classList.toggle("dark");

  const temaDark = document.body.classList.contains("dark");

  // Salva a preferência do tema no localStorage
  localStorage.setItem("temaDark", temaDark);

  // Parte para mudar o gif apresentado na home-page de acordo com o tema
  const gif = document.getElementById("gif");
  const caminhoGIF = temaDark
    ? "/portfolio/imagens/gray-cat.gif"
    : "/portfolio/imagens/cat.gif";

  if (gif) {
    gif.src = caminhoGIF;
  }
}

// Função para aplicar o tema salvo no localStorage ao carregar a página
function aplicarTemaSalvo() {
  const temaDark = localStorage.getItem("temaDark") === "true";

  if (temaDark) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }

  // Parte para mudar o gif apresentado na home-page de acordo com o tema
  const gif = document.getElementById("gif");
  const caminhoGIF = temaDark
    ? "/portfolio/imagens/gray-cat.gif"
    : "/portfolio/imagens/cat.gif";

  if (gif) {
    gif.src = caminhoGIF;
  }
}

// Script para ordenar os projetos de acordo com seu ano e semestre de desenvolvimento
document.addEventListener("DOMContentLoaded", function () {
  // Aplica o tema salvo
  aplicarTemaSalvo();

  const projetosContainer = document.querySelector(".projetos");
  const projetos = Array.from(projetosContainer.children);

  projetos.sort((a, b) => {
    const [yearA, semesterA] = a
      .getAttribute("data-year")
      .split("-")
      .map(Number);
    const [yearB, semesterB] = b
      .getAttribute("data-year")
      .split("-")
      .map(Number);

    if (yearA !== yearB) {
      return yearB - yearA;
    } else {
      return semesterB - semesterA;
    }
  });

  projetos.forEach((projeto) => {
    const [year, semester] = projeto
      .getAttribute("data-year")
      .split("-")
      .map(Number);
    const semestreTexto = semester === 1 ? "1º Semestre" : "2º Semestre";
    const anoSemestreTexto = `${year} - ${semestreTexto}`;

    let anoSemestreElement = projeto.querySelector(".ano-semestre");
    if (!anoSemestreElement) {
      anoSemestreElement = document.createElement("p");
      anoSemestreElement.classList.add("ano-semestre");
      projeto.insertBefore(
        anoSemestreElement,
        projeto.querySelector(".imagens-container")
      );
    }
    anoSemestreElement.textContent = anoSemestreTexto;

    projetosContainer.appendChild(projeto);
  });
});
