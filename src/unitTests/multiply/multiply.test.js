const { expect, test } = require('@jest/globals');
const { multiply } = require('./multiply');

test('multiplying positive numbers', () => {
    const result = multiply(2, 4);
    expect(result).toBe(8);
});

// to discribe several scenarios (use describe)
describe('multiplying', () => {
    test('multiplying positive numbers', () => {
        const result = multiply(2, 4);
        expect(result).toBe(8);
    });
    test('multiplying negative numbers', () => {
        const result = multiply(-2, -4);
        expect(result).toBe(8);
    });
})
