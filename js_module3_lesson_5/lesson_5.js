// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze


// Об'єкт

// const user = {
//     name: "Alex", 
//     age: 34,
//     languages: {
//         html: false,
//         css: false,
//         js: true,
//         "React Native": false,

//     }
// }
// console.log(user.languages.React_Native);
// console.log(user['languages']["css"]);

// for (const key in user) {
//     console.log(key);
//     console.log(user[key]);
    
// }
// ___________________________________________________

// const user = {
//     name: "Alex", 
//     age: 34,
//     languages: {
//         html: false,
//         css: false,
//         js: true,
//         "React Native": false,

//     }
// };

// // user.age = 30;
// // user.age += 1;

// user.city = 'NW' 
// console.log(user);

// // console.log(user.age);

// delete user.city
// console.log(user);
// _____________________________________________________

// const value = 1
// const value2 = 2

// const user = {
//     name: "Alex", 
//     age: 34,
//     languages: {
//         html: false,
//         css: false,
//         js: true,
//         "React Native": false,

//     },
//     [value + value2] : 'some value'
   
// };
// console.log(user);
// __________________________________________________________

// const user = {
//     name: "Alex", 
//     age: 34,
//     languages: {
//         html: false,
//         css: false,
//         js: true,
//         "React Native": false,

//     },
// };
// Object.freeze(user);
// // заморозити і не можна змінити/додати/видалити/перевизначити нічого!
// user.sdasdwfdawfawdawdw = 'sdafwefrwefergtrgtrhtyjkty';
// user.age = 100;
// console.log(user);

// _______________________________________________________________
// ВЛАСНІ І НЕВЛАСНІ ОБ"ЄКТИ


// const user = {
//     name: "Alex", 
//     age: 34,
//     languages: {
//         html: false,
//         css: false,
//         js: true,
//         "React Native": false,

//     }   
// };
// // Object.freeze(user);

// const user2 = Object.create(user);
// user2.age = 30
// // console.log(user2.age);
// console.log(user2);

// for ( const key in user2) {
//     ;
//         if (user2.hasOwnProperty(key)) {
//             console.log('Own', user2[key]);
//     } else {
//             console.log('All', user2[key]);
//     }

// ___________________________________________________
// const user = {
//     score: 0

// }
//  if (user.hasOwnProperty('score')) {
//     console.log('yes');
// } else {
//         console.log('no');
//     }

//     if ('score' in user) {
//         console.log('yes');
// }   else {
//         console.log('no');
//     }

// if (user.score) {
//      console.log('yes');
// } else {
//     console.log('no');
// }

// ______________________________________________________________

// const user = {
//     name: "Alex", 
//     age: 34,
//     languages: {
//         html: true,
//         css: false,
//         js: true,
//         ReactNative: false,
//     },   
//     // sayHello() {
//     //     console.log(this);
//     sayHello() {
//         console.log(`My name ${this.name}`);
//     },
//     iKnow() {
//         const keys = Object.keys(this.languages);
//         const values = Object.values(this.languages);
//         const entries = Object.entries(this.languages);

//         console.log(keys);
//         console.log(values);
//         console.log(entries);


//         // for (const key of keys) {
//         //     if (this.languages[key]) {
//         //     console.log(key);
//         //     }
//         // }
//         // console.log(keys);


//         // // for (const key in this.languages) 
//         // // if (this.languages[key]){
//         // //     console.log(key);
//         // // }
//     }
// }
// // const user2 = Object.create(user);
// // user2.age = 100;
// // const user2 = Object.create(user);
// // user2.name = 'Den';
// // console.log(user2);
// // user2.sayHello()
// // user.sayHello()
// user.iKnow()
// ____________________________________________________________________
// TASKS
// 1 Основи об'єктів

// const user = {
//     name: 'Mango',
//     age: 20,
//     hobby: 'html',
//     premium: true,
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// // user['premium'] = false;
// const key = 'premium';
// user[key] = false;
// console.log(user);

// //1 variant

// // for(const key in user) {
// //     console.log(user[key]); 
// // }

// //2 variant

// // const keys = Object.keys(user);
// // for (const key of keys) {
// //     console.log(user[key]);
// // }
// // console.log(keys);

// // додамо в об"єкт ще один об"єкт
// // user.skills  = {
// //     run: true,
// // }
// __________________________________________________________________________
// 2. Метод - Object.values()

// const salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130,
// };

// // ......(for...in)

// // let sum = 0;
// // for (const key in salaries) {
// //     sum += salaries[key]
// //  //   console.log(salaries[key]);
// // }

// // console.log(sum);

// // ......variant Object.values()

// let sum = 0;
// const values = Object.values(salaries);
// console.log(values)
// for (const value of values) {
//     sum += value
//     console.log(value);
// };

// console.log(sum);

// ___________________________________________________________
// 3........Масив об'єктів

// const stones = [{
//     name: 'Смарагд',
//     price: 1300,
//     quantity: 4
// },
// {
//     name: 'Діамант',
//     price: 2700,
//     quantity: 3
// },
// {
//     name: 'Сапфір',
//     price: 400,
//     quantity: 7
// },
// {
//     name: 'Щебінь',
//     price: 200,
//     quantity: 2
// },

// ];
// function calcTotalPrice(stones, stoneName)
//  {
//     // let result = 0;
//     for (const stone of stones) { 
//         // if (stone.name === stoneName) {
//         //     result = stone.price * stone.quantity;
//         //     break;
//         // }
//         //.................Приклада раннього повернення без змінної let
//         if (stone.name === stoneName) {
//             return stone.price * stone.quantity;
          
//         }
//         // console.log(stone.name);
//     }
//     return 'Empty';
//     // return result;
//  }
//  console.log(calcTotalPrice(stones, 'Сапфір'));
//  console.log(calcTotalPrice(stones, 'Щебінь'));
//  console.log(calcTotalPrice(stones, 'Діамант'));
//  console.log(calcTotalPrice(stones, 'Смарагд'));
//  console.log(calcTotalPrice(stones, 'Качан'));

// ______________________________________________________________
// //4.........Комлексні завдання
// const Transaction = {
//     DEPOSIT: 'deposit',
//     WITHDRAW: 'withdraw',
// };
// Object.freeze(Transaction)
// Transaction.DEPOSIT = 'wqqwdadawfsefwadw'
// console.log(Transaction);

// const account = {
//     //Поточний баданс рахунку
//     balance: 0,

//     //Історія транзакцій
//     transactions: [{
//         id: 16, 
//         amount: 155, 
//         type: 'deposit' 
//     }, ],
    
//     // Метод стоврює та повертає об"єкт транзакції.
//     //Приймає суму та тип транзакції.
//     createTransaction(amount, type) {
//         return {
//             id: Date.now(),
//             amount,
//             type
//         }
//     },

//     //Метод, що відповідає за додавання суми до балансу
//     //Прйимає суму транзакці
//     //Викликає  createTransaction, тобто створення об"єкта транзакції
//     // після чого додає його до історії транзакції
//     deposit(amount) {
//         if (amount <= 0) {
//             return 'Error'
//         }
//         const item = this.createTransaction(amount, Transaction.DEPOSIT)
//         this.balance += amount
//         this.transactions.push(item)
//         console.log(item);
//     },
//     //Метод, що відповідає за зняття суми з баланку.
//     //Приймає суму траннзакції.
//     // Викликає createTransaction дял створення об"єкта транзакції,
//     //після чого додає його до історії транзакції.
//     //Якщо amount більше ніж поточний баланс, виводь
//     //повідомлення
//     //про те, що зняття такої суми не можливе, недостатньо коштів
//     withdraw(amount) {
//         if (amount > this.balance || amount <= 0) {
//             return  'Недостатньо коштів!'
//         }
//         const item = this.createTransaction(amount, Transaction.WITHDRAW)
//         this.transactions.push(item);
//         this.balance -= amount;
//         console.log(item);
//     },

// //Метод повертає поточний баланс

// getBalance() {
// return this.balance
// },

// //Метод шукає та повертає об"єкт транзакції по його id
// getTransactionDetails(id) {
//     for (const transaction of this.transactions) {
//         if (transaction.id === id) {
//             return transaction
//         }
//     }
//         return 'Empty';
// },

// //Метод повертає кількість коштів певного типу транзакції з усієї історії 
// //транзакцій
// getTransactionTotal(type) {
//     let sum = 0;
// for (const transaction of this.transactions) {
//     if (transaction.type === type) {
//         sum += transaction.amount;
//     }
// }
// return sum;
// },

// }



// console.log(account.createTransaction(1000, "deposit"));
// account.deposit(1);
// account.deposit(15);
// account.deposit(1500);
// account.deposit(2500);
// account.deposit(3500);
// console.log(account.deposit(0));
// account.withdraw(1000);
// account.withdraw(200);
// console.log(account.withdraw(100));
// console.log(account);
// console.log(account.getBalance());
// console.log(account.getTransactionDetails(16));
// console.log(account.getTransactionTotal(Transaction.DEPOSIT));
// console.log(account.getTransactionTotal(Transaction.WITHDRAW));
// console.log(account.getBalance());
// account.deposit(4);
// console.log(account.getBalance());
// account.withdraw(3220);
// console.log(account.getBalance());
// account.deposit(11088);
// console.log(account.getBalance());
// console.log(account.getTransactionTotal(Transaction.DEPOSIT));
// console.log(account.getTransactionTotal(Transaction.WITHDRAW));
// console.log(account.getTransactionDetails(16));
// console.log(account.getBalance());
// console.log(account.deposit(0));
// console.log(account.withdraw(0));
// console.log(account.getBalance());


// ___________________________________________________________________________

// const arr = ['a', 'b', 'c']
// const idx = arr.indexOf('b'); 
// if (idx === -1) {
//     console.log("немає");
// } else { 
//     arr.splice(idx, 1)
// }
// console.log(idx);
// console.log(arr);
// _______________________________________________________________



// const user = {
//     name: 'Test user',
//     skills: {
//         html: true,
//         css: true,
//         react: false
//     },
// }
// console.log(user);

// Звернення до властивостей об'єкта

// console.log(user.name);
// console.log('css', user.skills.css);

// const objectKey = 'name';

// console.log(user[objectKey]);
// console.log(user['name']);

// const user = {
//     name: 'Test user',
//     skills: {
//         html: false,
//         css: true,
//         react: false
//     },
// }
// console.log(user.name);
// function getKey(key){ // 'name' 'skills'
//     console.log(user[key])//user['name']
// }
// getKey('name')
// getKey('skills')

// const objectKey = 'skills';
// const skillKey = 'css';


// console.log(user['skills']['css']);
// console.log(user[objectKey][skillKey]);
// console.log(user.skills[skillKey]);
// console.log(user[objectKey].css);



// Зміна значення властивості
// const user = {
//     name: 'Test user',
//     skills: {
//         html: false,
//         css: true,
//         react: false
//     },
// }

// user.city = 'Lviv';
// user['age'] = 28;
// console.log(user);


// user.city = 'Odessa';
// console.log(user);



// const user = {
//     name: 'Test user',
//     skills: {
//         html: false,
//         css: true,
//         react: false
//     },
// }
// Object.freeze(user.skills);
// user.name = 'Artem';
// user.city = 'Lviv';
// user.skills.html = true;
// console.log(user);

// const user = {
//     name: 'Test user',
//     skills: {
//         html: false,
//         css: true,
//         react: false
//     },
// }

// user.city = 'Lviv';
// delete user.city
// console.log(user);

// Методи об'єкта
// const user = {
//     name: 'Artem',
//     skills: {
//         html: false,
//         css: true,
//         react: false
//     },
//     sayHello(city) {
//         // console.log(city);
//         console.log(`Hello my name ${this.name}`);
//     }
// }

// const user2 = {
//     name: 'Den',
//     skills: {
//         html: true,
//         css: true,
//         react: true
//     },
//     sayHello: user.sayHello
// }

// user2.sayHello()
// user.sayHello('Lviv')

// console.log(user);





// Цикл for...in
// const testObj = {
//     name: 'Artem',
//     skills: {
//         html: false,
//         css: true,
//         react: false
//     }, sayHello(city) {
//         // console.log(city);
//         console.log(`Hello my name ${this.name}`);
//     }
// }

// const user = Object.create(testObj);
// user.city = 'Lviv'
// console.log(user);

// for (const key in testObj) {
//     if (testObj.hasOwnProperty(key)) {
//         console.log(key, user[key]);
//     }
// }





// Метод Object.keys()
// const user = {
//     name: 'Artem',
//     skills: {
//         html: false,
//         css: true,
//         react: false
//     },
// }

// const keys = Object.keys(user);
// for(const key of keys){
//     console.log(key,user[key]);
// }
// console.log(keys);



// Метод Object.values()

// const user = {
//     name: 'Artem',
//     skills: {
//         html: false,
//         css: true,
//         react: false
//     },
// }
// const values = Object.values(user);
// const values = Object.values(user.skills);
// console.log(values);

// Метод Object.entries()

// const user = {
//     name: 'Artem',
//     skills: {
//         html: false,
//         css: true,
//         react: false
//     },
// }


// const entries = Object.entries(user);
// const entries = Object.entries(user.skills);
// console.log(entries);




// Перерва до 21.05




// Практика //
// Task - 1
// Створи функцію яка буде приймати 3 параметри та формувати об'єкт покупки
// 1 Назва продукту
// 2 Кількість одиниць
// 3 Ціна за 1 одиницю товару
// Функція має повертати сформований об'єкт з ключами name, price, quantity, totalPrice.


// function createBasket(product, quantity, price) {
//     const totalPrice = quantity * price;

//     console.log('product', product);
//     // const basket = {
//     //     product, // product : 'pizza'
//     //     quantity,
//     //     price,
//     //     totalPrice
//     // }

//     // return basket;

//     return {
//         product,
//         quantity,
//         price,
//         totalPrice
//     }
// }
// console.log(createBasket('pizza', 3, 120));
// console.log(createBasket('aplle', 13, 1200));

// Task - 2
// Створи функцію для ведення статистики комп'ютерного клубу. Функція приймає 1 параметр це об'єкт користувачів де ключ це ім'я користувача, а значення це час оренди у хвилинах.
// Функція повертає рядок з інформацією про те скільки було користувачів та який середній час оренди комп'ютер.

// const players = {
//     Den: 60,
//     Kate: 130,
//     William: 45,
//     Matthew: 120,
//     Ethan: 40,
//     David: 55,
// }

// function getTime(obj) {
//     const values = Object.values(obj);
//     let total = 0;
// console.log(values);
//     for (const value of values) {
//         total += value;
//     }

//     return `Count of players ${values.length}, average time ${total/values.length}`
// }

// console.log(getTime(players));


// Task - 3
// 1 Створити функцію яка буде приймати 2 параметри
//    1 параметр масив
//    2 параметр назва книги
// Функція повертає Імена юзерів (формат стрінги) в яких є дана книга ("Harry Potter") \\\ "Anna, Oleksii"

// 2 Порахувати вік всіх юзерів у яких є ключ age.

// const friends = [
//     { name: "Anna", books: ["Bible", "Harry Potter"], age: 21 },
//     { name: "Bob", books: ["War and peace", "Romeo and Juliet"], age: 26 },
//     { name: "Alice", books: ["War and peace", "Romeo and Juliet"] },
//     { name: "Oleksii", books: ["Bible", "War and peace", "Harry Potter", "Romeo and Juliet"], age: 26 },
// ]

// function getTotalAge(arr) {
//     let totalAge = 0;

//     for (const user of arr) {
//         // console.log(user.name, 'age' in user);

//         if ('age' in user) {
//             console.log(`${user.name} - ${user.age}`);
//             totalAge += user.age
//         }
//         // if (user.hasOwnProperty('age')) {
//         //     totalAge += user.age
//         // }
//     }
//     console.log(totalAge);
// }
// console.log(getTotalAge(friends));






// const user = {
//     name: "Anna",
//     books: ["Bible", "Harry Potter"],
//     age: 21
// }
// function getUsers(arr, bookName) {
//     const userNames = [];
//     for (const user of arr) {
//         if (user.books.includes(bookName)) {
//             userNames.push(user.name);
//         }
//     }

//     return userNames.join(', ');
// }
// console.log(getUsers(friends, "Harry Potter"));




// Task - 4
// 1 Створити метод об'єкту який буде приймати 1 параметр назву факультету та повертати списoк імен учнів факультету
// 2 Створити метод об'єкту який буде приймати 1 параметр назву факультету та повертати кількість очків факультета

// const hogvarts = {
//     griffindor: [{
//         name: "Harry",
//         points: 17
//     },
//     {
//         name: "Hermiona",
//         points: 19
//     },
//     {
//         name: "Ron",
//         points: 14
//     },
//     ],
//     slizerin: [{
//         name: "Draco",
//         points: 17
//     },
//     {
//         name: "Goyl",
//         points: 14
//     },
//     {
//         name: "Crabbe",
//         points: 5
//     },
//     ],
//     getUserList(faculty) {
//         if (!(faculty in this)) {
//             return 'Faculty not found 😥';
//         }
//         const students = [];
//         for (const student of this[faculty]) {
//             students.push(student.name);
//         }
//         return students.join(', ')
//     },
//     getTotalPoints(faculty) {
//         if (!(faculty in this)) { // ! HE 
//             return 'Faculty not found 😥';
//         }
//         let totalPoints = 0;
//         for (const student of this[faculty]) {
//             if ('points' in student) {
//                 totalPoints += student.points;
//             }
//         }

//         return totalPoints;
//     }
// }

// console.log(hogvarts.getUserList('griffindor'));
// console.log(hogvarts.getUserList('slizerin'));
// console.log(hogvarts.getUserList('slitherin'));

// console.log(hogvarts.getTotalPoints('griffindor'));
// console.log(hogvarts.getTotalPoints('slizerin'));
// console.log(hogvarts.getTotalPoints('slitherin'));




// const user = {
//     name: 'Test user',
//     skills: {
//         html: false,
//         css: true,
//         react: false
//     },
// }


// let totalKeys = 0;

// for (const key in user) {
//     if (user.hasOwnProperty(key)) {
//         totalKeys += 1
//     }
// }

// console.log(totalKeys);

// console.log(Object.keys(user).length);


// console.log(800 === 000800);
// console.log(123 === 000123);


// 2) чо це ? 800 === 000800 true 123 === 000123 false
// 3) де можна дивитися інфу про оновлення всяких мов щоб бути в курсі всіх нових фішок ?
// 4) я знайшов додаток RunJS там не треба свторювати файли і писати логи там вже показується результат, ви знаєте про цей додаток ? пишу щоб всі змогли спробувати в ньому просто не треба зайвих файлів і браузер відкривати його навіть на заннятях можна використовувати, що скажете ? якраз практика без логів які все одно треба буде потім прибирати 
// 5) бачив у вас в джс сніпети для розгортки коду чи можна буде іх отримати в слек ?
// 6) чи є у вас вигорання і якщо є як з ним справлятися ?