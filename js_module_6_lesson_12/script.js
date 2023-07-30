// const elements = {
//     clickMe: document.querySelector('.js-click'),
//     box: document.querySelector('.js-box')
// }

// elements.clickMe.addEventListener('click', handlerClick)

// let step = 0;
// // function handlerClick() {
// //     step += 50;
// //     elements.box.style.marginTop = `${step}px`;
// //     console.log(elements.box.style.marginTop);
// //     elements.box.style.marginLeft = `${step}px`;
// //     console.log(elements.box.style.marginLeft);
// //     // console.log(evt);
// // }

// function handlerClick(evt) {
//     step += 50;
//     evt.currentTarget.style.marginTop = `${step}px`;
//     console.log(elements.box.style.marginTop);
//     evt.currentTarget.style.marginLeft = `${step}px`;
//     console.log(elements.box.style.marginLeft);
//     // console.log(evt);
// }

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const elements = {
    clickMe: document.querySelector('.js-click'),
    box: document.querySelector('.js-box'),
    query: document.querySelector('.js-query')
}

elements.query.addEventListener('input', handlerSearch);
elements.query.addEventListener('change', handlerSearch);

function handlerSearch(evt) {
    console.dir(evt.currentTarget.value);
}























