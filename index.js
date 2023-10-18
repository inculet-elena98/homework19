

// function fibonacci(num) {
//   let a = 1;
//   b = 1;
//   for (let i = 3; i <= num; i++) {
//     let c = a + b;
//     a = b;
//     b = c;
//   }
//   return b;
// }
// console.log(fibonacci(10))


function hello() {
  console.log('Hello', this)
}
const person = {
  name: 'Elena',
  age: 25,
  logInfo: function () {
    console.log(`Name is ${this.name}`)
    console.log(`Age is ${this.age}`)
  }
}
person.logInfo.bind(person)()
person.logInfo.call(person)
person.logInfo.apply(person)