 /*Автомобиль. Возможные методы: ввод информации об авто (марка, номер), вкл./выкл.
двигателя, вкл./выкл. передачи (вперед, назад, нейтральная), движение вперед и назад
(ввод информации о скорости движения), расчет пройденных километров.*/

let Car = function() {
    
    this.turn = function() {
        this.on = confirm('Вы завели машину?');
        if (this.on) {
            this.get();
        }
        else {
            alert('Машина не заведена')
        }
 
    };
   
   
    this.get = function() {
        this.brand = prompt('Введите марку машины');
        this.number = prompt('Введите номер машины');
        this.transmission = confirm('Вы включили передачу?');


        if (this.transmission) {
            this.onward = confirm('вы ехали вперед?');
            if (this.onward) {
                this.onwardV = +prompt('Введите скорость с которой вы ехали вперед в км/ч');
                this.onwardTime = +prompt('Введите время сколько вы ехали вперед в минутах');
            }
            else {
                alert('Вы наверное хотите поехать в другую сторону');
                this.onwardV = 0;
                this.onwardTime= 0;
            } 

            this.down = confirm('может вы ехали еще назад?');
            if (this.down) {
                this.downV = +prompt('Введите скорость с которой вы ехали назад в км/ч');
                this.downTime = +prompt('Введите время сколько вы ехали назад в минутах');
            }

            else {
                alert('Правильно,только вперед');
                this.downV = 0;
                this.downTime= 0;
            }
        }
        else {
            alert('Включите передачу чтобы поехать')
        }
        this.distance();
    };

    this.distance = function() {
        this.result = this.onwardV+ this.onwardTime + this.downV + this.downTime; 

        this.show();
    };

    this.show = function() {
            alert('Машина ' + this.brand + ' с номером ' + this.number + ' проехала ' + this.result + ' км');

    };
 };

 let car = new Car();
car.turn();

 let car2 ={
     brand : "mazda",
     autoTransmission: "auto",
     color : "black",
 };



 car2.__proto__ = Car;
 console.log(car2)





// второй метод прототипного наследования

function Auto (brand, price, gas, color) {
  
    this.brand = brand;
    this.price = price;
    this.gas = gas;
    this.color = color;
    this.discount = '40%'
   
}    


 Auto.prototype.drive = function () {
       if (this.gas > 0) {
         this.gas = this.gas - 20;
         return this.gas;
     }else{
         console.log('бензин закончился!')
     }
 }

 Auto.prototype.info = function () {
     return `Стоимость ${this.brand} = ${this.price}`   
 }
 Auto.prototype.info = function () {
    return `Уровень топлива ${this.brand} = ${this.gas}`   
}

Auto.prototype.info = function () {
    return `цвет машины ${this.brand} = ${this.сolor}`   
}

   Auto.prototype.discount = '40%';

const bmw = new Auto("bmw", "100,000", "100", "black");
const nissan = new Auto("nissan", "40,000", "100", "red");
const mazda = new Auto("mazda", "25,000", "100", "green");

