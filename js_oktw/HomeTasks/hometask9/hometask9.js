// Все робити за допомоги js.
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
        // let block = document.createElement('div')
        // block.classList.add('wrap')
        // block.classList.add('collapse')
        // block.classList.add('alpha')
        // block.classList.add('beta')
        // block.style.background = 'grey';
        // block.style.color = 'yellow';
        // block.style.fontSize = '20px'
        // document.body.appendChild(block)
        //
        // let cloneBlock = block.cloneNode(true)
        // document.body.appendChild(cloneBlock)
// - Є масив:
//
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
        // let arr = ['Main','Products','About us','Contacts']
        // let menu = document.getElementsByClassName('menu')[0];
        // for (const i of arr) {
        //     let li = document.createElement('li')
        //     li.innerText = i;
        //     menu.appendChild(li)
        // }
// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
        // for (const element of coursesAndDurationArray) {
        //     let div = document.createElement('div')
        //     document.body.appendChild(div)
        //     div.innerText = `title: ${element.title}; monthDuration: ${element.monthDuration}`
        // }

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

        // for (const element of coursesAndDurationArray) {
        //     let div = document.createElement('div')
        //     let h1 = document.createElement('h1')
        //     let p = document.createElement('p')
        //     h1.classList.add('item')
        //     p.classList.add('heading')
        //     document.body.appendChild(div)
        //     h1.innerText = element.title
        //     p.innerText = element.monthDuration
        //     div.appendChild(h1)
        //     div.appendChild(p)
        // }