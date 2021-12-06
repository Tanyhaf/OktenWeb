// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"
let textByID = document.getElementById('content');
console.log(textByID)
// -- отримує текст з блоку з id "rules"
let blockText = document.getElementById('rules')
console.log(blockText)
// -- замініть текст параграфа з id 'content' на будь-який інший
textByID.innerText = 'Hello world'
// -- замініть текст параграфа з id 'rules' на будь-який інший
blockText.innerText = "Rules change"
// -- змініть кожному елементу колір фону на червоний
let changeColour = document.body.children;
for (const changeColourKey of changeColour) {
    changeColourKey.style.backgroundColor = 'red';
}
// -- змініть кожному елементу колір тексту на синій
for (const changeColourElement of changeColour) {
    changeColourElement.style.color = 'blue'
}
// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
let listClass = document.getElementById('rules')
console.log(listClass.classList)
// -- поміняти колір тексту у всіх елементів fc_rules на червоний
let chageColour = document.getElementsByClassName("fc_rules")
for (const chageColourElement of chageColour) {
    chageColourElement.style.color = 'red'
}
