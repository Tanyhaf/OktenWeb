// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// - створити функцію яка повертає найбільше число з масиву
// - створити функцію яка повертає найменьше число з масиву
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
//
//
let newArray = [4,6,3,1,56,3,5,2,54,2,12];
let minNumber=(a,b,c)=>{
    if (a<b && a<c){
        console.log(a);
    }else if(b<c){
        console.log(b);
    }else{
        console.log(c);
    }
}

let maxMumber=(a,b,c)=>{
    if (a>b && a>c){
        console.log(a);
    }else if(b>c){
        console.log(b);
    }else{
        console.log(c);
    }
}
let maxArray=(arr)=> {
    let max = 0;
    for (const i in arr) {
        if (arr[i] >max) {
            max = arr[i]
        }
    }
    return max
}

let minArray=(arr)=> {
    let min = arr[0];
    for (const i in arr) {
        if (arr[i] < min) {
            min = arr[i]
        }
    }
    return min
}

let sumArray=(arr)=>{
    let sum=0;
    for (const i in arr) {
        sum = arr[i]+sum;
    }
    return sum;
}

let middleNumber=(arr)=>{
    let ser = 0;
    let sum = 0;
    for (const i in arr) {
        sum=(sum+arr[i])
    }
    ser = sum/arr.length;
    return ser
}


let returnMinMax=(array)=>{
    console.log(maxArray(array))
    return minArray(array);
}

let randomArray = []
let randomizer=(n)=>{
    for (let i = 0; i  < n ; i++) {
        randomArray[i] = Math.round(Math.random()*100);
    }
    console.log(randomArray)
}

let returnArray=(arr)=>{
    let returnArr=[]
    for (let i = arr.length-1, j=0; i > 0 ; i--, j++) {
        returnArr[j]=arr[i]
    }
    console.log(returnArr)
}

// minNumber(3,1,2);
// maxMumber(5,3,2);
// sumArray(newArray);
// middleNumber(newArray);
//randomizer(5)
// console.log(maxArray(newArray));
// console.log(minNumber(newArray));
//console.log(returnMinMax(newArray));
//returnArray(newArray)
