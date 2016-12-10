import palindrome from '../source/palindrome';

test('"Never odd or even" is palindrome', () => {
    expect(palindrome('Never odd or even')).toBe(true);
});

test('"Race fast, safe car!" is palindrome', () => {
    expect(palindrome('Race fast, safe car!')).toBe(true);
});
test('"A man, a plan, a canal: Panama" is palindrome', () => {
    expect(palindrome('A man, a plan, a canal: Panama')).toBe(true);
});

test('"Cigar? Toss it in a can. It is so tragic." is palindrome', () => {
    expect(palindrome('Cigar? Toss it in a can. It is so tragic.')).toBe(true);
});

test('"Where is my coffee?!" is not palindrome', () => {
    expect(palindrome('Where is my coffee?!')).not.toBe(true);
});
