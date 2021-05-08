//1

const person = {
  city: "Kirow",
};
const student = Object.create(person);
student.ownCity = "Uganda";
for (let key in student) {
  if (student.hasOwnProperty(key)) {
    console.log(key);
  }
}
//2

const qwerty = {
  a: 1,
  b: 2,
  c: "booba",
};
console.log("c" in qwerty);
//3

const yup = new Object();
//4

function Electro(deviceStatus, deviceColor) {
  this.status = function () {
    console.log(deviceStatus);
  };
  this.color = function () {
    console.log(deviceColor);
  };
  this.info = function () {
    console.log(deviceStatus, deviceColor);
  };
}
const computer = new Electro("Комп включен", "Цвет: черный");
const lamp = new Electro("Лампа выключена", "Цвет: белый");
computer.info();
lamp.info();
//5

class Electro {
  constructor(deviceStatus, deviceColor) {
    this.info = console.log(deviceStatus, deviceColor);
  }
}
const computer = new Electro("Комп включен", "Цвет: черный");
const lamp = new Electro("Лампа выключена", "Цвет: белый");
