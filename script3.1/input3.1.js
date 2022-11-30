const forms = document.getElementById("formulario")
const buttonVertical = document.getElementById('vertical')
const buttonHorizontal = document.getElementById('horizontal')
const buttonInicio = document.getElementById('alinhaInicio')
const buttonFim = document.getElementById('alinhaFinal')
const inputForms = document.getElementsByClassName('inputs')

function changeFlexDirection(e) {
    forms.style.flexDirection = e.target.value;
}
function changeAlignDirection(e) {
    forms.style.alignItems = e.target.value;
}

function changeDisplay(e) {
    forms.style.display = e.target.value;

    if (e.target.value === "grid") {
        buttonVertical.style.display = "none";
        buttonHorizontal.style.display = "none";
        propsGrid()
    } else {
        buttonVertical.style.display = "block";
        buttonHorizontal.style.display = "block";
    }
}

function propsGrid() {
    for (let i = 0; i < inputForms.length; i++) {
        document.getElementById(inputForms[i].id).style.gridArea = inputForms[i].id
    }
    forms.style.gridTemplateAreas = "'elemento1 elemento1 elemento2' 'elemento4 elemento5 elemento2' 'elemento3 elemento3 elemento3'";
    forms.style.gap = "25px";

}

buttonVertical.addEventListener('click', changeFlexDirection);
buttonHorizontal.addEventListener('click', changeFlexDirection);
buttonInicio.addEventListener('click', changeAlignDirection);
buttonFim.addEventListener('click', changeAlignDirection);





