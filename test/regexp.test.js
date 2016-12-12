import matchEmail from '../source/regexp/email';

test('String "to@azat.io" is email', () => {
    expect(matchEmail('to@azat.io')).toBe(true);
});

test('String "test@bbc.co.uk" is email', () => {
    expect(matchEmail('test@bbc.co.uk')).toBe(true);
});

test('String "test@nic.travel" is email', () => {
    expect(matchEmail('test@nic.travel')).toBe(true);
});

test('String "to@azat.i" is not email', () => {
    expect(matchEmail('to@azat.i')).not.toBe(true);
});
