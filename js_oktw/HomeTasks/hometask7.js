// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User (id,name,surname,email,phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let users = [
    new User (4, 'Vasia', 'Pupkin', 'vasiapup@gmail.com', '06853246754'),
    new User (2, 'Petro', 'Flhyg', 'petro@gmail.com', '0673092387'),
    new User (9, 'Lera', 'Kught', 'lera@gmail.com', '0974095760'),
    new User (1, 'Sofia', 'Tyfhc', 'sofa@gmail.com', '0684556754'),
    new User (7, 'Sasha', 'Guikgut', 'sasha@gmail.com', '068455636'),
    new User (6, 'Vitalik', 'Kvhf', 'vitalik@gmail.com', '365654546'),
    new User (5, 'Stepan', 'Higyu', 'stepan@gmail.com', '0984532312'),
    new User (8, 'Igor', 'Uufj', 'igor@gmail.com', '09345643455'),
    new User (3, 'Vitia', 'Ppojhkg', 'vita@gmail.com', '0683048573'),
    new User (10, 'Orest', 'Jighutf', 'orest@gmail.com', '09737537495')
]

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let user = users.filter(user => user.id%2===0);
console.log(user);
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let user1 = users.sort((a,b)=> a.id - b.id)
console.log(user1)
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client {
    constructor(id, name, surname , email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let clients= [
    new Client (1, 'Vasia', 'Pupkin', 'vasiapup@gmail.com', '06853246754', ['game', 'phone','mouse','book','bag']),
    new Client (2, 'Petro', 'Flhyg', 'petro@gmail.com', '0673092387', ['game','mouse','book','bag']),
    new Client (3, 'Lera', 'Kught', 'lera@gmail.com', '0974095760', ['game', 'phone','book','bag']),
    new Client (4, 'Sofia', 'Tyfhc', 'sofa@gmail.com', '0684556754', ['game', 'phone','mouse','bag']),
    new Client (5, 'Sasha', 'Guikgut', 'sasha@gmail.com', '068455636', ['phone','mouse','book']),
    new Client (6, 'Vitalik', 'Kvhf', 'vitalik@gmail.com', '365654546', ['mouse','book','bag']),
    new Client (7, 'Stepan', 'Higyu', 'stepan@gmail.com', '0984532312', ['game', 'phone','mouse']),
    new Client (8, 'Igor', 'Uufj', 'igor@gmail.com', '09345643455', ['game','bag']),
    new Client (9, 'Vitia', 'Ppojhkg', 'vita@gmail.com', '0683048573', ['book','bag']),
    new Client (10, 'Orest', 'Jighutf', 'orest@gmail.com', '09737537495', ['phone','mouse','bag'])
]
console.log(clients)
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sortOrder = clients.sort((a,b)=>a.order.length-b.order.length)
console.log(sortOrder)