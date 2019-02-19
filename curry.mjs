console.log('Demonstrating a currying');

function add(i) {
    return function (j) {
        return i +j;
    }
}

// Two curried function instances loaded
const f1 = add(1);
const f2 = add(2);

// Add 5 using each
console.log('1+5=', f1(5));
console.log('2+5=', f2(5));