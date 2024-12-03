export function addOptionForm() {
  const locationSelect = document.querySelector(".search-1 select");
  if (locationSelect) {
    const newOption = document.createElement("option");
    newOption.value = "Presidente Prudente";
    newOption.textContent = "Presidente Prudente";
    locationSelect.appendChild(newOption);
  }
}

/*
Exporto a função para usar modularização.
Seleciono o elemento select da classe "search-1".
Caso seja encontrado, adiciono uma nova opção com o valor e texto "Presidente Prudente".
*/
