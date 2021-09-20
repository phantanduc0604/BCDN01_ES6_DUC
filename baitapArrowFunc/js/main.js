const colorList = ["pallet", "viridian", "pewter", "cerulean", "vermillion", "lavender", "celadon", "saffron", "fuschia", "cinnabar"];
let befoItem = 0;
const changeColor = (item) => {
    document.getElementById("house").classList.add(colorList[item]);
    document.getElementById("house").classList.remove(colorList[befoItem]);


    document.querySelector('.color-button.' + colorList[item]).classList.add("active");
    document.querySelector('.color-button.' + colorList[befoItem]).classList.remove("active");
    befoItem = item;
}

document.querySelector('#colorContainer .pallet').addEventListener('click', () => {
    changeColor(0);
})
document.querySelector('#colorContainer .viridian').addEventListener('click', () => {
    changeColor(1);
})
document.querySelector('#colorContainer .pewter').addEventListener('click', () => {
    changeColor(2);
})
document.querySelector('#colorContainer .cerulean').addEventListener('click', () => {
    changeColor(3);
})
document.querySelector('#colorContainer .vermillion').addEventListener('click', () => {
    changeColor(4);
})
document.querySelector('#colorContainer .lavender').addEventListener('click', () => {
    changeColor(5);
})
document.querySelector('#colorContainer .celadon').addEventListener('click', () => {
    changeColor(6);
})
document.querySelector('#colorContainer .saffron').addEventListener('click', () => {
    changeColor(7);
})
document.querySelector('#colorContainer .fuschia').addEventListener('click', () => {
    changeColor(8);
})
document.querySelector('#colorContainer .cinnabar').addEventListener('click', () => {
    changeColor(9);
})
