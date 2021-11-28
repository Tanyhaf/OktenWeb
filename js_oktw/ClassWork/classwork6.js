// - Дано список імен.
let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
        // let normalName=(n)=>{
        //    return  n
        //         .replaceAll('..',' ')
        //         .replaceAll('---',' ')
        //         .replaceAll('__',' ')
        //
        // }
        // console.log(normalName(n1))
        // console.log(normalName(n2))
        // console.log(normalName(n3))
//____________________________________________________________________________________________________________
//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
        let randoniser = (len) =>{
            arr=[]
            for (let i = 0; i < len; i++) {
        arr.push(Math.round(Math.random()*100));
            }
            return arr;
        }
        let result = randoniser(10)

//____________________________________________________________________________________________________________

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
        // console.log(result)
        //result.sort((num,num2) => num-num2);
        //console.log(result)
//____________________________________________________________________________________________________________

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
        // let fooFilter =(len)=>{
        //     let arr = []
        //     for (let i = 0; i < len; i++) {
        //         arr.push(Math.round(Math.random()*100))
        //     }
        //     return arr.filter(num => num%2===0);
        // }
        //console.log(fooFilter(7))

//____________________________________________________________________________________________________________

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
        // let map = result.map(num => num + '')
        // console.log(map)
//____________________________________________________________________________________________________________

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
        //             let nums = [11,21,3];
        //         let sortNums=(arr,direction)=>{
        //             if (direction==='ascending'){
        //                 arr.sort(function(a, b) {
        //                     return a - b;})
        //                 console.log(arr);
        //             }else if(direction==='ascending'){
        //                 arr.sort(function(a, b) {
        //                     return b - a;})
        //                 console.log(arr);
        //             }
        //         }
        //
        //
        //         sortNums(nums,'ascending') // [3,11,21]
        //         sortNums(nums,'ascending') // [21,11,3]
        //
        //
        // - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
        // coursesAndDurationArray.sort(function (a,b) {return b.monthDuration-a.monthDuration})
        // console.log(coursesAndDurationArray)

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
        // coursesAndDurationArray = coursesAndDurationArray.filter(month => month.monthDuration>5);
        // console.log(coursesAndDurationArray)
