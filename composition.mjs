console.log('Demonstrating composition');

// Takes array of functions and passes result of first into second and so on
const compose = (...fns) => (arg) =>
    fns.reduce(
        (composed, f) => f(composed),
        arg
    );


const f1 = (a) => { console.log(`A logging ${a}`); return 'a'; };
const f2 = (b) => { console.log(`B logging ${b}`); return 'b'; }

const f = compose(f1,f2);
f('start');