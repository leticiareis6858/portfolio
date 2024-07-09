//função para mudar o tema do site para dark
function mudarTema() {
  document.body.classList.toggle("dark");

  const temaDark = document.body.classList.contains("dark");

  //parte para mudar o gif apresentado na home-page de acordo com o tema
  const gif = document.getElementById("gif");

  const caminhoGIF = temaDark ? "/imagens/gray-cat.gif" : "/imagens/cat.gif";

  if (gif) {
    gif.src = caminhoGIF;
  }
}

// script para ordenar os projetos de acordo com seu ano e semestre de desenvolvimento
document.addEventListener("DOMContentLoaded", function () {
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
      projeto.insertBefore(anoSemestreElement, projeto.querySelector("img"));
    }
    anoSemestreElement.textContent = anoSemestreTexto;

    projetosContainer.appendChild(projeto);
  });
});
