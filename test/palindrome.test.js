import firstWay from '../source/palindrome/first-way';
import secondWay from '../source/palindrome/second-way';

const solutions = [firstWay, secondWay];

solutions.forEach((palindrome, i) => {
    i += 1;
    test('"Never odd or even" is palindrome: Test #' + i, () => {
        expect(palindrome('Never odd or even')).toBe(true);
    });

    test('"Race fast, safe car!" is palindrome: Test #' + i, () => {
        expect(palindrome('Race fast, safe car!')).toBe(true);
    });
    test('"A man, a plan, a canal: Panama" is palindrome: Test #' + i, () => {
        expect(palindrome('A man, a plan, a canal: Panama')).toBe(true);
    });

    test('"Cigar? Toss it in a can. It is so tragic." is palindrome: Test #' + i, () => {
        expect(palindrome('Cigar? Toss it in a can. It is so tragic.')).toBe(true);
    });

    test('"Where is my coffee?!" is not palindrome: Test #' + i, () => {
        expect(palindrome('Where is my coffee?!')).not.toBe(true);
    });
});
