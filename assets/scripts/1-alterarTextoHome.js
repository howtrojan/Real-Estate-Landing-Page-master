export function updateHeroHeading() {    
      const heroHeading = document.querySelector(".hero-content h1");
      if (heroHeading) {
        heroHeading.textContent = "Bem - vindo ao Nosso Site";
      }    
}

  

/* Exporto a função, ja que decidi usar a modularização.
Depois disso, localizo o título principal (h1) dentro de um container com a classe "hero-content".
Caso o elemento h1 seja encontrado, ele altera o texto do título para "Bem-vindo ao Nosso Site". */

  