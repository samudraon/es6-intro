// no more use of var
// let: let it to reassign
// const: do not allow it to reassign

let money = 25;
money = 35;
console.log(money);

const bird = 'jaan pakhi'
// bird = 'moyna pakhi'
console.log(bird);

const numbers = [23, 34, 56, 21];
// reassign is not allowed
// numbers = [88, 31, 12, 34];
numbers.push(124);
numbers[1] = 80;
console.log(numbers);

const student = {
    name: 'Mofiz',
    address: 'Rongpur'
};
// student = { name: 'Mofazzol' };
student.name = 'Moffazzol';