 
import {findFirstRepeated} from './index.js';

test('should  be 3 for [2, 1, 3, 5, 3, 2]', () => { 
    const exp = 3;
    const testData= [2, 1, 3, 5, 3, 2];
    const result = findFirstRepeated(testData);
    expect(result).toBe(exp);
});

test('should be -1 for [1, 2, 3, 4]', () => {
    const exp = -1;
    const testData = [1, 2, 3, 4];
    const result = findFirstRepeated(testData);
    expect(result).toBe(exp);
});

test('should be 5 for [5, 1, 5, 1]', () => {
    const exp = 5;
    const testData = [5, 1, 5, 1];
    const result = findFirstRepeated(testData);
    expect(result).toBe(exp);
});
