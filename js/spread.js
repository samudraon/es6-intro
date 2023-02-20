const max = Math.max(12, 95, 31, 421, 55);
// console.log(max);

const numbers = [23, 34, 521, 56];
const largest = Math.max(...numbers);
// console.log(largest);

const numbers2 = [...numbers];
numbers.push(55);
numbers2.push(431);
console.log(numbers);
console.log(numbers2);

const numbers3 = [444, 21, ...numbers, 35];
console.log(numbers3);