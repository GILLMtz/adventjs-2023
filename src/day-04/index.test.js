import { decode } from './index.js';  

test(' should be "hola mundo" for "hola (odnum)"', () => {
    const exp = 'hola mundo';
    const inputData = 'hola (odnum)';
    const result =  decode(inputData);
    expect(result).toBe(exp);
});

test(' should be "hello world!" for "(olleh) (dlrow)!"', () => {
    const exp = 'hello world!';
    const inputData = '(olleh) (dlrow)!';
    const result =  decode(inputData);
    expect(result).toBe(exp);
});

test(' should be "santaclaus" for "sa(u(cla)atn)s"', () => {
    const exp = 'santaclaus';
    const inputData = 'sa(u(cla)atn)s';
    const result =  decode(inputData);
    expect(result).toBe(exp);
})


/* const a = decode('hola (odnum)')
console.log(a) // hola mundo

const b = decode('(olleh) (dlrow)!')
console.log(b) // hello world!

const c = decode('sa(u(cla)atn)s')
console.log(c) // santaclaus

// Paso a paso:
// 1. Invertimos el anidado -> sa(ualcatn)s
// 2. Invertimos el que queda -> santaclaus */