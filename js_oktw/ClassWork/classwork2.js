// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.
        // let num1 = prompt('Enter number 1');
        // let num2 = prompt('Enter number 2');
        // let max;
        // if (num1>num2){
        //     max = num1;
        //     console.log(max);
        // } else if (num2>num1){
        //     max = num2;
        //     console.log(max);
        // } else if(num1===num2){
        //     console.log('Number same')
        // }else {
        //     console.log('Data error')
        // };


// - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.
        // let flat=prompt('Enter number flat')
        // if (flat>=1 && flat<=20){
        //     console.log('First')
        // }else if(flat>=21 && flat<=48) {
        //     console.log('second')
        // }else if(flat>=49 && flat<=90){
        //     console.log('Third')
        // }else{
        //     console.log('Error number')
        // }
// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО
        // let number=prompt('Enter number')
        // result=number==10?'Good':'Error';
        // console.log(result)
// - Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну записане число, вивести 1,
//     якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 3.
// якщо в змінну записали щось інше, спрацьовує else
        // let x=6;
        // if (typeof(x)==="number"){
        //     console.log('1')
        // }else if (typeof(x)==="string"){
        //     console.log('2')
        // }else if (typeof(x)==="boolean"){
        //     console.log('3')
        // }else if (typeof(x)==='object'||typeof(x)===[]){
        //     console.log('4')
        // }else {
        //     console.log('Error')
        // }


// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН
    // let temp=22;
    // if (temp>=18 && temp<=22){
    //     console.log('ми йдемо ВЧИТИСЯ')
    // }else {
    //     console.log('сидимо вдома і вчимося ОНЛАЙН')
    // }

// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .
        // let num = prompt("Enter nunber")
        // switch (num){
        //     case '1':
        //         console.log('Car');
        //         break;
        //     case '2':
        //         console.log('Smartphone');
        //         break;
        //     case '3':
        //         console.log('Iphone13');
        //         break;
        //     case '4':
        //         console.log('Laptop');
        //         break;
        //     case '5':
        //         console.log('Flat')
        //         break;
        //     default:
        //         console.log('Number false')
        // }