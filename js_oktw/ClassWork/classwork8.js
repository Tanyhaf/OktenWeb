//
// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header
let getIdMain_header = document.getElementById('main_header')
getIdMain_header.classList.add('nameGroup')
// b) робить шириниу елементу ul 400px
let elementUl = document.getElementsByTagName('ul')
for (const elementUlElement of elementUl) {
    elementUlElement.style.width = '400px';
}
// c) робить шириниу всіх елементів з класом linkList шириною 50%
let getClassLinkList = document.getElementsByClassName('linkList')
for (const classLinkListElement of getClassLinkList) {
    classLinkListElement.style.width = '50%';
}
// d) отримує текст який зберігається в елементі з класом listElement2
function addText(text) {
    let elementsByClassName = document.getElementsByClassName('listElement2');
    elementsByClassName.innerText = text;
}

// e) отримує всі елементи li та змінює ім колір фону на сірий
let getElementLi = document.getElementsByTagName('li')
for (const i of getElementLi) {
    i.style.background = 'grey';
}

// f) отримує всі елементи 'a' та додає їм клас anchor
let getElementA = document.getElementsByTagName('a')
for (const elementAElement of getElementA) {
    elementAElement.classList.add('anchor');
}
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
for (const elementAElement of getElementA) {
    if (elementAElement.innerText === 'link3'){
        elementAElement.style.fontSize = '40px'
    }
}
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
for (const elementAElement of getElementA) {
    let text = elementAElement.innerText
    elementAElement.classList.add(`element_${text}`);
}
// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let getElementSub_header = document.getElementsByClassName('sub-header')
let fon = prompt('Enter fon');
    // for (const elementSubHeaderElement of getElementSub_header) {
    //     elementSubHeaderElement.style.background = fon
    // }
// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
    // for (const elementSubHeaderElement of getElementSub_header) {
    //     if (elementSubHeaderElement.textContent === 'content 2 segment'){
    //         elementSubHeaderElement.style.background = fon
    //     }
    // }
// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
let getElementContent_1 = document.getElementsByClassName('content_1')
for (const elementContent1Element of getElementContent_1) {
    elementContent1Element.innerText = prompt('enter text');
}
// l) отримати елементи p та змінити їм padding на 20px
let getElementP = document.getElementsByTagName('p');
for (const elementPElement of getElementP) {
    elementPElement.style.padding = '20px';
}
// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
let getElementClassText2 = document.getElementsByClassName('text2');
for (const elementClassText2Key of getElementClassText2) {
    elementClassText2Key.innerText = 'sep-2021';
}
