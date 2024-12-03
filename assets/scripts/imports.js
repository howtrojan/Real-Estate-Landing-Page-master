import { updateHeroHeading } from "./1-alterarTextoHome.js";
import { updateHeroImage } from "./2-alterarImagem.js";
import { hideElement } from "./3-esconderElemento.js";
import { styleFooterParagraph } from "./4-estilizarParagrafoRodape.js";
import { moveElement } from "./5-moverElemento.js";
import { contactButton } from "./6-botaoContato.js";
import { addOptionForm } from "./7-adicionarOpcaoFormulario.js";
import { moveItemMenu } from "./8-moveItemMenu.js";
import { validateForm } from "./9-validarFormularioRodape.js";
import { createSectionTestimonials } from "./10-criarSecaoDepoimentos.js";

updateHeroHeading();
updateHeroImage();  
hideElement();
styleFooterParagraph();
moveElement();
contactButton();
addOptionForm();
moveItemMenu();
validateForm();
createSectionTestimonials();

/* Decidi deixar todos os imports em um unico arquivo para ficar mais organizado. */