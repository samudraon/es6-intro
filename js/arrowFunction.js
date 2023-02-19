const number = 56;

// function expression
const add1 = function add1(first, second) {
    const total = first + second;
    return total;
}
// function expression with anonymous function
const add2 = function (first, second) {
    const total = first + second;
    return total;
}

const add3 = function (first, second) {
    return first + second;
}

/* arrow function */
const add4 = (first, second) => first + second;
const result = add4(10, 20);
console.log(result);


// Interview Question:
/* Differences between function declaration, function expression and arrow function */