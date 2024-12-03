export function moveItemMenu() {
  const aboutUsItem = document.querySelector(
    ".footer-links-2 ul li:first-child"
  );
  const blogItem = document.querySelector(".footer-links-2 ul li:nth-child(3)");

  if (aboutUsItem && blogItem) {
    const link = aboutUsItem.querySelector("a");
    link.href = "#about-us";
    blogItem.after(aboutUsItem);
  }
}

/*Deixei modular, eu iria inserir o "ABOUT US" porem ja existia então decidi apenas move-lo para baixo do "Blog".
  Então eu seleciono os dois itens. Verifico se existem. E se existirem ele incluo o href e movo o "ABOUT US" abaixo dele. Verificado a versão mobile
  Deixei o codigo da inserção comentado abaixo*/

/*
  export function moveItemMenu() {
    const blogItem = document.querySelector(".footer-links-2 ul li:nth-child(3)");
    if (blogItem) {
      const newMenuItem = document.createElement("li");
      const menuLink = document.createElement("a");
      menuLink.href = "#about-us";
      menuLink.textContent = "ABOUT US";
      newMenuItem.appendChild(menuLink);
      blogItem.after(newMenuItem);
    }
  } */
