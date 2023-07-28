// const title = document.querySelector('h1');

// const title = document.querySelector('.js-title');

// const title = document.querySelector('#title');

// console.log(title);

// const items = document.querySelectorAll('.js-item');
// console.log(items);
// console.log([...items]);
// console.log(Array.from(items));

// const title = document.getElementById('title');
// console.log(title);

// const items2 = document.getElementsByClassName('js-title');
// console.log(items2);

// const list = document.querySelector('.js-list')

// const li = document.createElement('li');
// li.textContent = 5;
// li.classList.add('js-item');
// const li2 = document.createElement('li');
// li2.textContent = 6;
// li2.classList.add('js-item');
// // const li3 = document.createElement('li');
// // li3.textContent = 7;
// // li3.classList.add('js-item');
// const liItems = [li, li2]

// // li['classList'].add('js-item');
// // console.log(li['classList']);
// // li.classList.toggle('js-item');
// // li.classList.toggle('js-item');
// // li.classList.remove('js-item');
// // li.classList.replace('js-it', 'js-elem');
// // list.appendChild(li);
// // list.append(li, li2);
// list.append(...liItems);
// console.dir(li);

// const li = `<li class="js-item">5</li>`

// const li = document.createElement('li'); //|
// const h2 = document.createElement('h2'); //|
// li.append(h2)                            //|  довгий приклад, верхній краще
// li.textContent = 5;                      //|
// li.classList.add('js-item');             //|

// const list = document.querySelector('.js-list');
// const li = `<li class="js-item">5</li>`

// list.insertAdjacentHTML('beforeend', li);
// list.innerHTML = ''
//______________________________________________________

//NAVIGATION

// const items = document.querySelectorAll('.js-item');
// const items2 = document.getElementsByClassName('js-item');
// const list = document.querySelector('.js-list');

// console.log('static', items);
// console.log('dynamic', items2);
// // console.dir(list);

// let markup = '';
// for (let i = 1; i <= 3; i += 1) {
//     markup += `<li class="js-item">${list.children.length + i}</li>`
//     // console.log(list.children[i]);
// }
// console.log(markup);

// list.insertAdjacentHTML('beforeend', markup);

// console.log('static', items);
// console.log('dynamic', items2);

//_________________________________________________

// const list = document.querySelector('.js-list');

// list.style.listStyle = 'none';

// list.style.display = 'flex';

// console.dir(list);

//

// const input = document.querySelector('.js-query');

// input.value = "HELLO WORLD";
// // input.textContent = 'Hello world';
// console.dir(input);
//__________________________________________________

//ATTRIBUTES

// const btn = document.querySelector('.js-btn');
// // btn.hidden = true;
// // btn.hidden = false;
// // btn.disabled = true;
// // btn.disabled = false;

// // btn.setAttribute('hidden', true);
// // btn.removeAttribute('hidden');
// // console.log(btn.getAttribute('hidden'));

// btn.setAttribute('data-id', 24);
// btn.setAttribute('data-goods-id', 2);
// btn.setAttribute('data-test-id', 4);

// const {goodsId, id, testId} = btn.dataset;
// console.log(id);
// console.log(goodsId);
// console.log(testId);

// console.dir(btn);
//__________________________________________________________________________________

// const cars = [
//   {
//     model: "Honda",
//     type: "Civic",
//     price: 12000,
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
//   },
//   {
//     model: "Audi",
//     type: "Q7",
//     price: 40000,
//     img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg",
//   },
//   {
//     model: "BMW",
//     type: "5 series",
//     price: 9000,
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU",
//   },
//   {
//     model: "Honda",
//     type: "Accord",
//     price: 20000,
//     img: "https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg",
//   },
//   {
//     model: "Volvo",
//     type: "XC60",
//     price: 7000,
//     img: "https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320",
//   },
//   {
//     model: "Honda",
//     type: "Civic",
//     price: 12000,
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
//   },
//   {
//     model: "Audi",
//     type: "Q7",
//     price: 40000,
//     img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg",
//   },
//   {
//     model: "BMW",
//     type: "5 siries",
//     price: 9000,
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU",
//   },
//   {
//     model: "Honda",
//     type: "Accord",
//     price: 20000,
//     img: "https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg",
//   },
//   {
//     model: "Volvo",
//     type: "XC60",
//     price: 7000,
//     img: "https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320",
//   },
//   {
//     model: "Honda",
//     type: "Civic",
//     price: 12000,
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
//   },
//   {
//     model: "Audi",
//     type: "Q7",
//     price: 40000,
//     img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg",
//   },
//   {
//     model: "BMW",
//     type: "5 siries",
//     price: 9000,
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU",
//   },
//   {
//     model: "Honda",
//     type: "Accord",
//     price: 20000,
//     img: "https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg",
//   },
//   {
//     model: "Volvo",
//     type: "XC60",
//     price: 7000,
//     img: "https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320",
//   },
//   {
//     model: "Honda",
//     type: "Civic",
//     price: 12000,
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
//   },
//   {
//     model: "Audi",
//     type: "Q7",
//     price: 40000,
//     img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg",
//   },
//   {
//     model: "BMW",
//     type: "5 siries",
//     price: 9000,
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU",
//   },
//   {
//     model: "Honda",
//     type: "Accord",
//     price: 20000,
//     img: "https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg",
//   },
//   {
//     model: "Volvo",
//     type: "XC60",
//     price: 7000,
//     img: "https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320",
//   },
//   {
//     model: "Honda",
//     type: "Civic",
//     price: 12000,
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
//   },
//   {
//     model: "Audi",
//     type: "Q7",
//     price: 40000,
//     img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg",
//   },
//   {
//     model: "BMW",
//     type: "5 siries",
//     price: 9000,
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU",
//   },
//   {
//     model: "Honda",
//     type: "Accord",
//     price: 20000,
//     img: "https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg",
//   },
//   {
//     model: "Volvo",
//     type: "XC60",
//     price: 7000,
//     img: "https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320",
//   },
//   {
//     model: "Honda",
//     type: "Civic",
//     price: 12000,
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
//   },
//   {
//     model: "Audi",
//     type: "Q7",
//     price: 40000,
//     img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg",
//   },
//   {
//     model: "BMW",
//     type: "5 siries",
//     price: 9000,
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU",
//   },
//   {
//     model: "Honda",
//     type: "Accord",
//     price: 20000,
//     img: "https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg",
//   },
//   {
//     model: "Volvo",
//     type: "XC60",
//     price: 7000,
//     img: "https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320",
//   },
// ];

// console.log(cars);

// const list = document.querySelector('.js-list');

// function createMarkup(arr) {
//   const markup = arr.map(({ model, type, price, img }) => {
//       const li = document.createElement('li');
//       const imgEl = document.createElement('img');
//       const h2 = document.createElement('h2');
//       const h3 = document.createElement('h3');
//       const span = document.createElement('span');

//       imgEl.src = img;
//       imgEl.alt = model;
//       imgEl.style.width = '300px';

//       h2.textContent = model;
//       h3.textContent = type;
//       span.textContent = price;

//       li.append(imgEl, h2, h3, span);

//       return li;
//   })
//   console.log(markup);

//   list.append(...markup)
// }

// createMarkup(cars)
//____++++++++++++++++++++++++++++++++++++++++++++++++++++_____________

// const list = document.querySelector('.js-list');

// function createMarkup(arr) {
//   const markup = arr.map(({ model, type, price, img }) => `<li>
//       <img src="${img}" alt="${model}" width="300" />
//       <h2>${model}</h2>
//       <h3>${type}</h3>
//       <span>${price}</span>
//       </li>` ).join('');

//     list.insertAdjacentHTML('beforeend', markup)

//     console.log(markup);
// }

// createMarkup(cars)
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// const sectionEl = document.querySelector(".section")
// sectionEl.addEventListener('click', handkerClick);

// function handkerClick(evt) {

//     if (evt.target.nodeName !== "BUTTON") {
//         return;
//     }

//     const btn1 = evt.target.cloneNode();
//     const btn2 = evt.target.cloneNode();
//     btn1.textContent = "click";
//     btn2.textContent = "click";


//     evt.target.remove()
//     console.log(btn1);
//     sectionEl.append(btn1, btn2)

// }

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++











































