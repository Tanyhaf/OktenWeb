// - Дано натуральное число n. Выведите все числа от 1 до n.
        // let natureNum = (start ,n)=>{
        //     console.log(start)
        //     start++
        //     if (start>n){
        //         return 0;
        //     }
        //     natureNum(start,n)
        // }
        // natureNum(1,9)

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
        // let abfunction = (a,b) => {
        //     if (a < b) {
        //         for (a; a <= b; a++) {
        //             console.log(a);
        //         }
        //     } else {
        //
        //         for (a; a >= b; a--) {
        //             console.log(a);
        //         }
        //
        //     }
        // }
        //abfunction(2,9);
        //abfunction(8,2);
// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

        // let changeFoo=(arr,i)=>{
        //     for (let j = 0; j <arr.length; j++) {
        //         if (j===i){
        //             let a = arr[j+1]
        //             arr[j+1]=arr[j]
        //             arr[j]=a
        //         }
        //         console.log(arr[j])
        //     }
        // }
        // changeFoo([9,8,0,4],1)
// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
let sortArray0 = (arr) =>{
    let newArray=[]
    for (const arrKey in arr) {
        if (arr[i]===0){

        }
    }
}