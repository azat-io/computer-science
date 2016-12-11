/**
 * Get Fibonacci number
 *
 * @param  {number} num Property Fibonacci number
 * @return {number}     This number
 */
export default function fibonacci(num) {
    try {
        if (num <= 0) {
            throw new Error('The number should be one or more');
        } else if (num % 1 !== 0) {
            throw new Error('The number should be an integer');
        } else if (typeof num !== 'number') {
            throw new Error('Argument should be a number');
        } else if (num === 1) {
            return 0;
        }
        return num === 2 ? num = 1 : fibonacci(num - 1) + fibonacci(num - 2);
    } catch (err) {
        return err.message;
    }
}
