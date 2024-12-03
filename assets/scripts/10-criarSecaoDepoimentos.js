export function createSectionTestimonials() {
  const testimonialsSection = document.createElement("section");
  testimonialsSection.className = "testimonials";

  testimonialsSection.innerHTML = `
      <h2>Depoimentos</h2>
      <div class="testimonial">
        <p>" A qualidade do trabalho superou minhas expectativas. "</p>
        <span>- Ana Monteiro</span>
      </div>
      <div class="testimonial">
        <p>" Atendimento impecável e soluções rápidas! "</p>
        <span>- João Pereira</span>
      </div>
      <div class="testimonial">
        <p>" Fiquei muito satisfeito com o profissionalismo e dedicação. "</p>
        <span>- Marina Costa</span>
      </div>
      <div class="testimonial">
        <p>"Recomendo de olhos fechados! Trabalho excelente. "</p>
        <span>- Lucas Ferreira</span>
      </div>
    `;

  const style = document.createElement("style");
  style.textContent = `
      .testimonials {
        background-color: #f9f9f9;
        padding: 20px;
        margin: 20px 0;
        border-radius: 10px;
      }
      .testimonial {
        margin-bottom: 15px;
      }
      .testimonial p {
        font-style: italic;
      }
      .testimonial span {
        display: block;
        text-align: right;
        font-weight: bold;
      }
    `;
  document.head.appendChild(style);

  const contactSection = document.querySelector(".find");
  if (contactSection) {
    contactSection.parentNode.insertBefore(testimonialsSection, contactSection);
  }
}

/*

Exporto função para criar seção de depoimentos modular.
Cria elemento de seção, adiciona conteúdo HTML com depoimentos,
aplica estilos CSS dinâmicos e insere seção antes da seção de contato.
*/
