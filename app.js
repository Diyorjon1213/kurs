// 1-misol

// const person = {
//     name: "Ali",
//     age: 18
// };
// Object.defineProperty(person,"name",{
//     enumerable: true,
//     configurable: true,
//     writable: false,
// })

// person.name = "Vali"

// console.log(person)

// 2-misol

// class Student {
//     constructor(name) {
//       this._name = name;
//       this._age = null;
//     }

//     get age() {
//       return this._age;
//     }

//     set age(value) {
//       if (value >= 7 && value <= 70) {
//         this._age = value;
//         console.log(`Yosh ${value} ga o'rnatildi.`);
//       } else {
//         console.log("Yosh 7-70 oralig'ida bo'lishi kerak.");
//       }
//     }
//   }

//   const student = new Student("Diyorjon");

//   student.age = 20;
//   student.age = 100;

//   3-misol

// const user = {
//   ism: "Ali",
//   yosh: 25,
// };

// Object.defineProperties(user, {
//   ism: {
//     enumerable: true,
//     configurable: true,
//     writable: false,
//   },
//   yosh: {
//     enumerable: true,
//     configurable: true,
//     writable: false,
//   },
// });

// user.ism = "Diyorjon";
// user.yosh = 18;
// console.log(user);

// 4-misol

// let phone = {};

// Object.defineProperties(phone, {
//   model: {
//     value: "iPhone",
//     writable: true,
//     enumerable: true,
//     configurable: true,
//   },
//   price: {
//     value: 1000,
//     writable: true,
//     enumerable: true,
//     configurable: true,
//   },
// });

// console.log(phone);

// 5-misol

// const settings = {
//   theme: "dark",
//   language: "uz",
// };
// Object.freeze(settings)
// settings.language = "ru"
// console.log(settings)

// 6-misol

// let numbers = [1, 2, 3, 4, 5];

// Object.freeze(numbers)
// numbers.push(9)
// console.log(numbers)

// 7-misol

// const student = {
//   name: "Ali",
//   grade: 5,
// };

// Object.seal(student);
// console.log(Object.isSealed(student));

// 8-misol

// const message = {
//   title: "Salom",
//   text: "Dunyo",
// };

// Object.seal(message);
// console.log(Object.isSealed(message));

// 9-misol

// const fruits = ["olma", "banan"];
// const vegetables = ["sabzi", "piyoz"];

// const food = [...fruits, ...vegetables];

// console.log(food);

// 10-misol

// let numbers = [1, 2, 3];

// const newNumber = [...numbers, 4, 5];
// console.log(newNumber);

// 11-misol

// const info1 = { name: "Ali" };
// const info2 = { age: 25 };

// const info = { ...info1, ...info2 };

// console.log(info);

// 12-misol

// function sum(...numbers) {
//     let total = 0;

//     numbers.forEach(number => {
//         const digitSum = String(number)
//             .split('')
//             .map(Number)
//             .reduce((sum, digit) => sum + digit, 0);

//         total += digitSum;
//     });

//     return total;
// }

// console.log(sum(123, 456, 789));
// console.log(sum(12, 34, 56));
// console.log(sum(7, 89, 12345));

// 13-misol

// const fruits = ["olma", "banan", "nok", "uzum"];

// [a, ...b] = ["olma", "banan", "nok", "uzum"];

// console.log(b);

// 14-misol

// const user = {
//   name: "Ali",
//   age: 25,
//   city: "Tashkent"
// };

// const { name: ism, ...info } = {
//   name: "Ali",
//   age: 25,
//   city: "Tashkent"
// };

// console.log(info);

// 15-misol

// const num = [1, 2, 3];

// function add(x, y, z) {
//   let res = 0;
//   res = x + y + z;
//   return res;
// }
// console.log(add(...num));

// 16-misol

const colors = ["qizil", "yashil"];

const newColors = ["ko'k", ...colors, "sariq"];
console.log(newColors);
