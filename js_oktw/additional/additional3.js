// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
        // let arrayEven = [];
        // let a =0;
        // while (arrayEven.length<50){
        //     a=Math.floor(Math.random()*100);
        //     if (a%2===0){
        //         arrayEven.push(a)
        //     }
        // }
        //console.log(arrayEven);
//______________________________________________________________________________________________________________________________
//     b. заповнити його 50 непарними числами за допомоги циклу.
        // let arrayOdd = [];
        // let cont = 0;
        // while (arrayOdd.length<50){
        //     cont=Math.floor(Math.random()*100);
        //     if (cont%2===1){
        //         arrayOdd.push(cont)
        //     }
        // }
        //console.log(arrayOdd);
//_________________________________________________________________________________________________________________________________
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
        // let arrayRandom = []
        // for (let i = 0; i < 20; i++) {
        //     arrayRandom.push(Math.round(Math.random()*100))
        // }
        // console.log(arrayRandom)
//_________________________________________________________________________________________________________________________________
// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
        //let arrayRandom = []
        //for (let i = 0; i < 20; i++) {
        //    arrayRandom.push(Math.round(Math.random() * (732 - 8) + 8))
        //}
        //console.log(arrayRandom);
//_________________________________________________________________________________________________________________________________
// 2. Вивести за допомогою console.log кожен третій елемен
        // let newarray=[482, 406, 158, 417, 448, 238, 671, 210, 297, 326, 695, 539, 289, 137, 488, 217, 676, 239, 107, 489]
        // for (let i = 0; i < newarray.length; i=i+3) {
        //     console.log(newarray[i])
        // }
//_________________________________________________________________________________________________________________________________


// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
        // let newarray=[482, 406, 158, 417, 448, 238, 671, 210, 297, 326, 695, 539, 289, 137, 488, 217, 676, 239, 107, 489]
        // for (let i = 0; i < newarray.length; i=i+3) {
        //     if (newarray[i]%2===0) {
        //         console.log(newarray[i])
        //     }
        // }
//_________________________________________________________________________________________________________________________________

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
        // let oldArray=[482, 406, 158, 417, 448, 238, 671, 210, 297, 326, 695, 539, 289, 137, 488, 217, 676, 239, 107, 489]
        // let newArray=[]
        // for (let i = 0; i < oldArray.length; i=i+3) {
        //     if (oldArray[i]%2===0) {
        //     newArray.push(oldArray[i])
        //     }
        // }
        // console.log(newArray);
//_________________________________________________________________________________________________________________________________
// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
        // let oldArray=[482, 406, 158, 417, 448, 238, 671, 210, 297, 326, 695, 539, 289, 137, 488, 217, 676, 239, 107, 489];
        // for (let i = 0; i < oldArray.length; i++) {
        //     if (oldArray[i]%2===0){
        //         console.log(oldArray[i+1])
        //     }
        // }
//_________________________________________________________________________________________________________________________________

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
        // let price= [100,250,50,168,120,345,188];
        // let sum=0;
        // for (let i=0; i<price.length; i++ ) {
        //     sum+=price[i]
        // }
        // console.log(sum/price.length)
//_________________________________________________________________________________________________________________________________

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
        // let oldArray=[482, 406, 158, 417, 448, 238, 671, 210, 297, 326, 695, 539, 289, 137, 488, 217, 676, 239, 107, 489];
        // let newArray=[];
        // for (const i in oldArray) {
        //     newArray.push(oldArray[i]*5)
        // }
        // console.log(newArray)
//_________________________________________________________________________________________________________________________________

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
        // let oldArray = ['one',2,'three',true,5,false, 7, 'four', 6, ' five']
        // let newArray = [];
        // for (const i in oldArray) {
        //     if (typeof (oldArray[i])==='number'){
        //         newArray.push(oldArray[i])
        //     }
        // }
        // console.log(newArray)

//_________________________________________________________________________________________________________________________________

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]
        //
        // let usersWithId = [
        //     {id: 1, name: 'vasya', age: 31, status: false},
        //     {id: 2, name: 'petya', age: 30, status: true},
        //     {id: 3, name: 'kolya', age: 29, status: true},
        //     {id: 4, name: 'olya', age: 28, status: false}
        // ];
        // let citiesWithId = [
        //     {user_id: 3, country: 'USA', city: 'Portland'},
        //     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
        //     {user_id: 2, country: 'Poland', city: 'Krakow'},
        //     {user_id: 4, country: 'USA', city: 'Miami'}
        // ];
        // let users =[];
        // for (let i=0; i < usersWithId.length;i++) {
        //     for (let j=0; j < citiesWithId.length; j++) {
        //         if (usersWithId[i]['id']===citiesWithId[j]['user_id']){
        //             users[i]=(usersWithId[i])
        //             users[i]['address']=citiesWithId[j]
        //         }
        //     }
        // }
        // for (const usersKey in users) {
        //     console.log(users[usersKey])
        // }

//_________________________________________________________________________________________________________________________________

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
        // let arrayList=[6,46,43,634,3,56,37,76,355,376]
        // for (const arrayListKey in arrayList) {
        //     if (arrayList[arrayListKey]%2===0){
        //         console.log(arrayList[arrayListKey])
        //     }
        // }
//_________________________________________________________________________________________________________________________________

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
        //  let arrayList=[6,46,43,634,3,56,37,76,355,376]
        // let newArray=[]
        // for (const i in arrayList) {
        //     newArray[i]=arrayList[i]
        // }
        // console.log(arrayList)
        // console.log(newArray)
//_________________________________________________________________________________________________________________________________

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
        // let array=[ 'a', 'b', 'c'];
        // let word='';
        // for (const arrayKey in array) {
        //     word+=array[arrayKey]
        // }
        // console.log(word);
//_________________________________________________________________________________________________________________________________

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
    // let array=[ 'a', 'b', 'c'];
    // let word='';
    // let i=0;
    // while (i<array.length){
    //     word+=array[i]
    //     i++;
    // }
    // console.log(word)
//_________________________________________________________________________________________________________________________________

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
        // let array=[ 'a', 'b', 'c'];
        // let word='';
        // for (const arrayElement of array) {
        //    word+=arrayElement
        // }
        // console.log(word)