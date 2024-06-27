//função para mudar o tema do site para dark
function mudarTema() {
  document.body.classList.toggle("dark");

  const temaDark = document.body.classList.contains("dark");
 
  //parte para mudar o gif apresentado na home-page de acordo com o tema
  const gif = document.getElementById("gif");

  const caminhoGIF = temaDark
    ? "/portfolio/imagens/gray-cat.gif"
    : "/portfolio/imagens/cat.gif";

  gif.src = caminhoGIF;
}
