let newArray1=[4,5,23,3,45,6,7]
let newArray2=[4,63,2,4,2,4,5]
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
function arg(a,b){
    if (b === undefined){
        console.log(a)
    }else{
        console.log(a+b)
    }
}
// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
function sunArray(arr1, arr2){
    let sumArr=[]
    for (const i in arr1) {
        for (const j in arr2) {
            if (i===j){
                sumArr[i] = arr1[i]+arr2[j];
            }
        }
    }
    console.log(sumArr)
}
//sunArray(newArray1,newArray2)
//arg(3,6)
// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
function masObject(mas){
    let newarray=[]
    for (const i in mas) {
        for (const iKey in mas[i]) {
            newarray.push(iKey)
        }
    }
    return newarray
}
// console.log(masObject(users))
//masObject(users)
//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
function arrayValous(mas){
    let array=[]
    for (const i in mas) {
        for (const iKey in mas[i]) {
            array.push(mas[i][iKey])
        }
    }
    return array
}
console.log(arrayValous(users))