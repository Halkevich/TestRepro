
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

