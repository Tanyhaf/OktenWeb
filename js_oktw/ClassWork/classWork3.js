// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
let array = [2,17,13,6,22,31,45,66,100,-18]
//let i=0;
//     1. перебрати його циклом while
        // while (i<array.length){
        //     console.log(array[i])
        //     i++;
        // }
//     2. перебрати його циклом for
        // for (const i in array) {
        //     console.log(array[i])
        // }
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
        // let i=1;
        // while (i<array.length){
        //     console.log(array[i])
        //     i=i+2;
        // }
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
        // for (let i = 1; i < array.length; i=i+2) {
        //     console.log(array[i])
        // }
// 5. перебрати циклом while та вивести  числа тільки парні  значення
        // let i=0
        // while (i < array.length){
        //     console.log(array[i])
        //     i=i+2
        // }
// 6. перебрати циклом for та вивести  числа тільки парні  значення
        // for (let i = 0; i < array.length; i=i+2) {
        //     console.log(array[i])
        // }
// // 7. замінити кожне число кратне 3 на слово "okten"
        // for (const i in array) {
        //     if (array[i]%3===0){
        //         console.log(array[i])
        //     }
        // }
// 8. вивести масив в зворотньому порядку.
        // for (let i = array.length-1; i >= 0; i--){
        //     console.log(array[i]);
        // }
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

//_____________________________________________________________________________________
//1. перебрати його циклом while
// let i=array.length-1
// while (i>=0){
//     console.log(array[i])
//     i--;
// }
//     2. перебрати його циклом for
// for (let i = array.length-1; i >= 0; i--) {
//     console.log(array[i])
// }
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let i=array.length-2
// while (i>=0){
//     console.log(array[i])
//     i=i-2;
// }
// // 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for (let i =array.length-2 ; i >= 0; i=i-2) {
//     console.log(array[i])
// }
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// let i=array.length-1
// while (i >=0){
//     console.log(array[i])
//     i=i-2
// }
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// for (let i =array.length-1 ; i >= 0; i=i-2) {
//     console.log(array[i])
// }
// // 7. замінити кожне число кратне 3 на слово "okten"
// for (let i =array.length-1 ; i >= 0; i--) {
//     if (array[i]%3===0){
//         console.log(array[i])
//     }
// }