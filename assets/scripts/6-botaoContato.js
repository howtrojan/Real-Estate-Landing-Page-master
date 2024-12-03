export function contactButton() {
  const contactLink = document.querySelector(
    ".footer-links-2 ul li:last-child a"
  );
  if (contactLink) {
    contactLink.id = "link-contact";
    contactLink.addEventListener("click", () => {
      alert("O botão foi acionado!");
    });
  }
}

/* 
Exporto a função para usar modularização.
Seleciono o botão "Contact Us" dentro da lista.
Caso seja encontrado, adiciono um ID a ele e um evento de clique com alerta.
*/