const Solution = require('../../../src/problems/SlidingWindow/medium/characterReplacement');

describe('characterReplacement', () => {
    let solution;

    beforeEach(() => {
        solution = new Solution();
    });

    test('should return 4 for string "ABAB" and k = 2', () => {
        const s = "ABAB";
        const k = 2;
        const result = solution.characterReplacement(s, k);
        expect(result).toBe(4);
    });

    test('should return 4 for string "AABABBA" and k = 1', () => {
        const s = "AABABBA";
        const k = 1;
        const result = solution.characterReplacement(s, k);
        expect(result).toBe(4);
    });

    test('should return 5 for string "AAAAA" and k = 2', () => {
        const s = "AAAAA";
        const k = 2;
        const result = solution.characterReplacement(s, k);
        expect(result).toBe(5);
    });

    test('should return 3 for string "ABCDE" and k = 2', () => {
        const s = "ABCDE";
        const k = 2;
        const result = solution.characterReplacement(s, k);
        expect(result).toBe(3);
    });

    test('should return 0 for an empty string and k = 2', () => {
        const s = "";
        const k = 2;
        const result = solution.characterReplacement(s, k);
        expect(result).toBe(0);
    });
});