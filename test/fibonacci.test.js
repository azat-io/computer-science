import fibonacci from '../source/fibonacci/fibonacci';

test('The 1st Fibonacci number is 0', () => {
    expect(fibonacci(1)).toBe(0);
});

test('The 2nd Fibonacci number is 1', () => {
    expect(fibonacci(2)).toBe(1);
});

test('The 3rd Fibonacci number is 1', () => {
    expect(fibonacci(3)).toBe(1);
});

test('The 7th Fibonacci number is 8', () => {
    expect(fibonacci(7)).toBe(8);
});

test('The 23rd Fibonacci number is 17711', () => {
    expect(fibonacci(23)).toBe(17711);
});

test('The -1rd Fibonacci number should return error', () => {
    expect(fibonacci(-1)).toBe('The number should be one or more');
});

test('A fractional number should return error', () => {
    expect(fibonacci(6.66)).toBe('The number should be an integer');
});

test('A string should return error', () => {
    expect(fibonacci('23')).toBe('Argument should be a number');
});
