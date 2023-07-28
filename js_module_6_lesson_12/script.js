const elements = {
    clickMe: document.querySelector('.js-click'),
    box: document.querySelector('.js-box')
}

elements.clickMe.addEventListener('click', handlerClick)

let step = 0;
function handlerClick(evt) {
    step += 50;
    elements.box.style.marginTop = `${step}px`;
    console.log(elements.box.style.marginTop);
    elements.box.style.marginLeft = `${step}px`;
console.log(evt);
console.log(elements.box.style.marginLeft);
}




























