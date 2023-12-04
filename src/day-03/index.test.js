import { findNaughtyStep } from "./index.js";

test('should be "e" for original="abcd" and modified="abcde"', () => {
    const exp = 'e';
    const original = 'abcd';
    const modified = 'abcde';
    const result = findNaughtyStep(original, modified);
    expect(result).toBe(exp);
});

test('should be "f" for original="stepfor" and modified="stepor"', () => {
    const exp = 'f';
    const original = 'stepfor';
    const modified = 'stepor';
    const result = findNaughtyStep(original, modified);
    expect(result).toBe(exp);
});

test('should be "" for original="abcde" and modified="abcde"', () => {
    const exp = '';
    const original = 'abcde';
    const modified = 'abcde';
    const result = findNaughtyStep(original, modified);
    expect(result).toBe(exp);
})
/* const original = 'abcd'
const modified = 'abcde'
findNaughtyStep(original, modified) // 'e'

const original = 'stepfor'
const modified = 'stepor'
findNaughtyStep(original, modified) // 'f'

const original = 'abcde'
const modified = 'abcde'
findNaughtyStep(original, modified) // '' */