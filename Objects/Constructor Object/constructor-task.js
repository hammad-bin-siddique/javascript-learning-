//! Task 1 — 🚗 Car Showroom

// Car ka Constructor banao jisme ho:
// - brand
// - model
// - year
// - color
// - price

// Phir 3 cars banao:
// Car 1: Toyota, Corolla, 2020, White, 3500000
// Car 2: Honda, Civic, 2022, Black, 4500000
// Car 3: Suzuki, Alto, 2019, Red, 1800000

// Phir har car ki details print karo

function CarShowroom(brand, model, year, color, price) {
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.color = color;
  this.price = price;
}

let car1 = new CarShowroom("Toyota", "Corolla", 2020, "White", 3500000);
let car2 = new CarShowroom("Honda", "Civic", 2022, "Black", 4500000);
let car3 = new CarShowroom("Suzuki", "Alto", 2019, "Red", 1800000);

console.log(car1);
console.log(car2);
console.log(car3);
console.table([car1, car2, car3]);

// ! Task 2 — 📱 Phone Store

// Phone ka Constructor banao jisme ho:
// - brand
// - model
// - storage
// - price
// - inStock (true/false)

// Phir 3 phones banao apni marzi se
// Phir console.table se sab print karo

function PhoneStore(brand, model, storage, price, inStock){
    this.brand = brand;
    this.model = model;
    this.storage = storage;
    this.price = price;
    this.inStock = inStock;
}

let ph1 = new PhoneStore("Nokia",2010,"32GB",15000,false);
let ph2 = new PhoneStore("Motorola",2023,"256GB",150000,true);
let ph3 = new PhoneStore("Iphone",2026,"256GB",129000,true);

console.table([ph1,ph2,ph3]);

// ! Task 3 — 👨‍💼 Employee

// Employee ka Constructor banao jisme ho:
// - name
// - department
// - salary
// - isFullTime (true/false)
// - introduce method — jo print kare:
//   "Mera naam ___ hai, main ___ department mein kaam karta hoon"

// Phir 3 employees banao
// Phir har employee ka introduce() call karo

function Employee(name,department,salary,isFullTime) {
  this.name = name;
  this.department = department;
  this.salary = salary;
  this.isFullTime = isFullTime;
  this.introduce = function(){
    console.log(`My name is ${this.name} and i'm working in ${this.department} and my salary is ${this.salary} and my job is Full time ${this.isFullTime}`);
  }
}

let employee1 = new Employee("Hammad","IT Park", 25000,true);
let employee2 = new Employee("Mohsin","Social Media Marketing", 250039,false);
let employee3 = new Employee("Faizan","Graphics", 129009,true);

employee1.introduce();
employee2.introduce();
employee3.introduce();