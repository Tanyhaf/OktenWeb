// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// - створити функцію яка обчислює та повертає площу кола з радіусом r
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// - створити функцію яка приймає масив та виводить кожен його елемент
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

function squareRectangle(a,b) {
    return a*b;
}
function squareCircle(r){
    return 3.14 * r;
}
function squareCylinder(h,r){
    return 2*3.14*r*h;
}
function array(arr){
    for (const i in arr) {
        console.log(arr[i])
    }
}
function pText(text){
    document.write(`<p>${text}</p>`);
}

function ul3li(li){
    document.write(`<ul>`)
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${li}</li>`)
    }
    document.write(`</ul>`)
}

function ulli(li, number){
    document.write(`<ul>`)
    for (let i = 0; i < number; i++) {
        document.write(`<li>${li}</li>`)
    }
    document.write(`</ul>`)
}

function arraylist(arr){
    document.write(`<ul>`)
    for (let i = 0; i < arr.length; i++) {
        document.write(`<li>${arr[i]}</li>`)
    }
    document.write(`</ul>`)
}
function userObject(user){
    for (const i of user) {
        document.write(`<div>${i.id}.${i.name} - ${i.age}</div>`);
    }}
let newArray = [7,5,8,'true',true, false, 4, 'dfgh']
let arrayuser = [{id:1, name:'Vasia', age:45},{id:2, name:'Vika', age:56},{id:3, name:'Lilia', age:15}]
squareRectangle(6,4);
squareCircle(6);
squareCylinder(45,5);
array(newArray);
pText('Мовлення як вид людської діяльності завжди зорієнтоване на виконання певного комунікативного завдання. Висловлюючи думки і почуття, людина ставить конкретну мету — щось повідомити, про щось переконати тощо. Існує багато визначень тексту. Наведемо окремі з них.є');
ul3li('Мовлення як вид людської діяльності завжди зорієнтоване');
ulli('one,two,three,four',5);
arraylist(newArray);
userObject(arrayuser);