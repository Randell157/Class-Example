//Functional Programming

const numbers = [1,2,3,4,5];
// const doubleNumbers = [];
// for(let number of numbers){
//     doubleNumbers.push(number * 2);
// }

const doubleNumbers = numbers.map(number => number * 2);
console.log(numbers);
console.log(doubleNumbers);