// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
        // let p = document.createElement('p')
        // let button = document.createElement('button')
        // p.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fugit!'
        // p.setAttribute('id','text')
        // button.innerText ='click me'
        // document.body.appendChild(p)
        // document.body.appendChild(button)
        // let click = document.getElementById('text')
        // button.onclick = function () {
        //      click.style.display = 'none';
        //  }

//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
        // let button = document.createElement('button')
        // button.innerText ='click me'
        // button.onclick = function (){
        //     button.style.display ='none'
        // }
        // document.body.appendChild(button)
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
        // let info = document.createElement('input');
        // let button = document.createElement('button');
        // button.onclick = function (data) {
        //     let input_value = info.value;
        //     console.log(data);
        //     if (input_value !== ''){
        //         if (input_value >= 18) {
        //             alert('Ваш вік більше 18');
        //         } else if (input_value <= 18 && input_value > 0) {
        //             alert('Ваш вік менше 18');
        //         } else {
        //             alert('Некоректні дані');
        //         }
        //     }else{
        //         alert('Введіть ваш вік');
        //     }
        //
        // }
        //
        // info.setAttribute('placeholder','Введіть ваш вік');
        // button.innerText = 'Підтвердити';
        // document.body.appendChild(info);
        // document.body.appendChild(button);
// - Создайте меню, которое раскрывается/сворачивается при клике
        // let menu = document.createElement('div');
        // let list = document.createElement('ul');
        // let button = document.createElement('button');
        // button.innerText = 'hide/show';
        // for (let i = 0; i < 10; i++) {
        //     let li = document.createElement('li');
        //     li.innerText = `list ${i};`
        //     list.appendChild(li);
        // }
        // document.body.appendChild(button);
        // document.body.appendChild(menu);
        // menu.appendChild(list);
        // button.onclick = function (){
        //     if (menu.style.display === 'none'){
        //         menu.style.display = '';
        //     }else{
        //         menu.style.display = 'none';
        //     }
        // }

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
        // let comments = [
        //     {name: 'Katia', body: 'Well done'},
        //     {name: 'Lena', body: 'Good'},
        //     {name: 'Iryna', body: 'Very good'},
        //     {name: 'Sasha', body: 'Better'},
        // ];
        //
        //
        // for (const comment of comments) {
        //     let wrap = document.createElement('div')
        //     let h1 = document.createElement('h1')
        //     let p = document.createElement('p')
        //     let button = document.createElement('button')
        //     document.body.appendChild(wrap)
        //
        //     wrap.appendChild(h1)
        //     h1.innerText = comment.name
        //     wrap.appendChild(p)
        //     p.innerText = comment.body
        //     wrap.appendChild(button)
        //     button.innerText = 'Click me'
        //
        //     button.onclick = function (){
        //         if (p.style.display === 'none'){
        //                     p.style.display = '';
        //                 }else{
        //                     p.style.display = 'none';
        //                 }
        //     }
        // }