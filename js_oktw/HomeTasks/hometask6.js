// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
        // let hello = 'hello world';
        // let lor = 'lorem ipsum';
        // let jsc = 'javascript is cool';
        // console.log(hello.length);
        // console.log(lor.length);
        // console.log(jsc.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
        // console.log(hello.toUpperCase());
        // console.log(lor.toUpperCase());
        // console.log(jsc.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
        // let helloup = 'HELLO WORLD';
        // let lorup = 'LOREM IPSUM';
        // let jscup = 'JAVASCRIPT IS COOL';
        // console.log(helloup.toLowerCase());
        // console.log(lorup.toLowerCase());
        // console.log(jscup.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//         let str = ' dirty string   '
//
//         console.log(str.trim())

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
        // let str2 = 'Каждый охотник желает знать';
        // let stringToarray = (str)=>{
        //     return str.split(' ');
        // }
        // let arr = stringToarray(str2);
        // console.log(arr); // ['Каждый', 'охотник', 'желает', 'знать']
        // document.write(arr);

//
// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
        //
        // let delete_characters = (s,num)=>{
        //     return s.slice(0,num)
        // }
        // let str = 'Каждый охотник желает знать';
        // document.writeln(delete_characters(str, 7)); // Каждый
//
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
        // let insert_dash = (str)=>{
        //     str = str.toUpperCase()
        //     return str.replaceAll(' ','-')
        // }
        //     let str = "HTML JavaScript PHP";
        // document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
//
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
        // let str = 'каждый охотник желает знать';
        // let toUpperCaseFirst = (str)=>{
        //     let str2;
        //     return str.replace(str[0],str[0].toUpperCase())
        // }
        // console.log(toUpperCaseFirst(str));
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
//          let text = 'каждый охотник желает знать';
//
//                  let capitalize = (str) => {
//                      return str.split(' ').map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(' ');
//
//                  }
//
//
//         console.log(capitalize(text))