export function hideElement() {
  const element = document.querySelector(".availability-content");
  if (element) {
    element.style.display = "none";
  }
}

/* Exporto a função hideElement, ja que decidi usar a modularização. 
Em seguida, seleciono o elemento com a classe "availability-content".
Caso o elemento seja encontrado, altera o estilo de display para "none". */
