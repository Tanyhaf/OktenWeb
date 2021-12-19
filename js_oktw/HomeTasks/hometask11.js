
/*-створити форму з інпутами для name та age.*/
/*При відправці форми записати об'єкт в localstorage*/
// let f1 = document.forms.form1;
// form1.onsubmit = function (e){
//     e.preventDefault();
//     let name = this.name.value;
//     let age = this.age.value;
//     localStorage.setItem('userData',JSON.stringify({name,age}));
// }


/*-створити форму з інпутами для model,type та volume автівки.*/
/*при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.*/

let formCar = document.forms.car;
formCar.onsubmit = function (e) {
    e.preventDefault();
    let model = this.model.value;
    let type = this.type.value;
    let volume = this.volume.value;
    let car= {model:model, type:type, volume:volume}
    let cars = JSON.parse(localStorage.getItem('cars')) || [];
    cars.push(car);
    localStorage.setItem('cars', JSON.stringify(cars));
}