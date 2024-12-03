export function updateHeroImage() {
  const heroContent = document.querySelector(".hero-content");
  const imagem = 'https://static.vecteezy.com/ti/vetor-gratis/p1/543069-ceu-azul-com-nuvens-e-predios-urbanos-projeto-da-ilustracao-do-no-corte-e-no-plano-de-papel-gratis-vetor.jpg';
  console.log(heroContent);
  if (heroContent) {
    heroContent.style.backgroundImage = `url(${imagem})`;
  }
}

/*
  Exporto a função pra ficar modular.
  Em seguida, seleciono o elemento com a classe "hero-content".
  Crio uma variável com o caminho da imagem.
  Caso o elemento seja encontrado, altera a imagem de fundo para a imagem especificada.
*/