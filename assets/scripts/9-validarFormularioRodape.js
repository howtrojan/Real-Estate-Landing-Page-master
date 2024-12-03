export function validateForm() {
  const emailField = document.querySelector(".footer-subscribe input");
  const submitButton = document.querySelector(".footer-subscribe button");

  if (emailField && submitButton) {
    submitButton.addEventListener("click", (event) => {
      if (!emailField.value.trim()) {
        alert("O campo de email está vazio");
        event.preventDefault();
      }
    });
  }
}

/* 
Exporto a função para usar modularização.
Seleciono os elementos de input e botão do formulário.
Caso ambos sejam encontrados, adiciono evento de clique para validar campo de email.
*/ 