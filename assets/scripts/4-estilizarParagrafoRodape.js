export function styleFooterParagraph() {
  const footerParagraph = document.querySelector("footer p");
  if (footerParagraph) {
    footerParagraph.style.fontWeight = "bold";
    footerParagraph.style.color = "blue";
  }
}

/* Exporto a função, ja que decidi usar a modularização.
Em seguida, seleciono o parágrafo dentro do rodapé.
Caso o parágrafo seja encontrado, ele altera o estilo dele para "bold" e "blue". */