// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка обчислює та повертає площу прямокутника висотою
        // let squareRectangle = (a,b)=> a+b;
        // console.log(squareRectangle(5,7));

// - створити функцію яка обчислює та повертає площу кола
        // let squareCircle = (r) =>{
        //     return 3.14 * r;
        // }
        // console.log(squareCircle(6))
// - створити функцію яка обчислює та повертає площу циліндру
        // let squareCylinder = (h,r) => {
        //     return 2*3.14*r*h;
        // }
// - створити функцію яка приймає масив та виводить кожен його елемент
        //         let array = (arr)=>{
        //             for (const i in arr) {
        //                 console.log(arr[i])
        //             }
        //         }
        //         array([4,5,3.2,3]);
// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
        // let pText=(text)=>{
        //     document.write(`<p>${text}</p>`);
        // }
        //pText('Мовлення як вид людської діяльності завжди зорієнтоване на виконання певного комунікативного завдання. Висловлюючи думки і почуття, людина ставить конкретну мету — щось повідомити, про щось переконати тощо. Існує багато визначень тексту. Наведемо окремі з них.є');

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
        // let ul3li=(li)=>{
        //     document.write(`<ul>`);
        //     for (let i = 0; i < 3; i++) {
        //         document.write(`<li>${li}</li>`)
        //     }
        //     document.write(`</ul>`);
        // }
        //ul3li('Мовлення як вид людської діяльності завжди зорієнтоване на виконання певного комунікативного завдання. Висловлюючи думки і почуття, людина ставить конкретну мету — щось повідомити, про щось переконати тощо. Існує багато визначень тексту. Наведемо окремі з них.є');


// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
        // let ulli=(li, number)=>{
        //     document.write(`<ul>`);
        //     for (let i = 0; i < number; i++) {
        //         document.write(`<li>${li}</li>`)
        //     }
        //     document.write(`</ul>`);
        // }
        //ulli('one,two,three,four',5);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
        // let arraylist=(arr)=>{
        //     document.write(`<ul>`);
        //     for (let i = 0; i < arr.length; i++) {
        //         document.write(`<li>${arr[i]}</li>`)
        //     }
        //     document.write(`</ul>`);
        // }
        // arraylist([7,5,8,'true',true, false, 4, 'dfgh']);

// // - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let userObject=(user)=>{
//     for (const i of user) {
//         document.write(`<div>${i.id}.${i.name} - ${i.age}</div>`);
//     }}
// userObject([{id:1, name:'Vasia', age:45},{id:2, name:'Vika', age:56},{id:3, name:'Lilia', age:15}]);