//
// // - Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]; Потрібно зробити перевірку якщо
// // кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив, в якому  3 і більше елементи.
// //     Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.
//
//         let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];
//         if (friends.length>=3){
//             console.log('це великий масив, в якому  3 і більше елементи')
//         }else{
//             console.log('е маленький масив, в якому менше 3-х елементів')
//         }
//________________________________________________________________________
// - Маємо 3 числа і між ним  нам потрібно знайти те що посередині.
//     Знайти, яке з них є середнім (більше одного, але менше за інше). Перевірити, чи знаходиться перше число між двома іншими.
//         let a=9;
//         let b=34;
//         let c=56;
//         if (a>b && a>c){
//             if (b>c){
//                 console.log(b);
//             }else{
//                 console.log(c);
//             }
//         }else if(b>a && b>c) {
//             if (a>c){
//                 console.log(a);
//             }else{
//                 console.log(c);
//             }
//         }else if (a>b){
//                 console.log(a);
//             }else{
//                 console.log(b);
//             }
//__________________________________________________________________________________
// - Перепишіть конструкцію if з використанням умовного оператора '?':
// let result;
// if (a + b < 4) {
//     result = 'Мало';
// } else {
//     result = 'Багато';
// }
//
//         let a=1;
//         let b=2;
//         let result = (a + b < 4)? 'Мало':'Багато';
//         console.log(result)
//__________________________________________________________________________________
// - Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або нулем
// напишіть це тернарним оператором
//         let num= 50;
//         let result = (num<0 && num>=-100)? 'негативним':  (num>0 && num<=100)?'позитивним': (num===0)?'0': 'error'
//         console.log(result)
//
//
//
//
//
//
