const selectValue = document.getElementById('select')
const productsCards = document.getElementById('cards')

function changeSelect(e) {
    productsCards.style.gridTemplateColumns = `repeat(${e.target.value}, 1fr)`

}
selectValue.addEventListener("change", changeSelect);