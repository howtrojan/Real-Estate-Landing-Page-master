export function moveElement() {
  const findElement = document.querySelector(".find");
  const heroSection = document.querySelector(".hero");
  if (findElement && heroSection) {
    heroSection.appendChild(findElement);
  }
}

/* 
    Exporto a função para usar modularização.
    Seleciono os elementos ".find" e ".hero".
    Caso ambos sejam encontrados, o elemento ".find" é movido para dentro de ".hero".
*/
