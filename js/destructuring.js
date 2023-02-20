const fish = {
    name: 'King Hilsha',
    address: 'Chandpur',
    color: 'silver',
    phone: '0213432',
    price: 4000
}

console.log(fish.phone);

const { address } = fish;
console.log(address);

/* array destructuring */
const [first, second] = [44, 88, 42, 41];
console.log(first, second);

const nayoks = ['sakib', 'bappa', 'raj'];
const [King, lost, notun] = nayoks;
console.log(notun);

function getNames() {
    return ['Alim', 'halim'];
}
const [baba, chacha] = getNames();
console.log(chacha, baba);