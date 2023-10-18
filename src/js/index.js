const botaoAlterarTema = document.getElementById("botao_alterar_tema");

const body = document.querySelector("body");

const imagemBotaoTrocaDeTema = document.querySelector(".imagem_tema");

botaoAlterarTema.addEventListener("click", () => {
  const modoEscuroEstaAtivo = body.classList.contains("modo_escuro");

  body.classList.toggle("modo_escuro");

  if (modoEscuroEstaAtivo) {
    imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/tema.png");
  } else {
    imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/tema.png");
  }
});
