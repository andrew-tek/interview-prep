const Solution = require('../../../src/problems/1D-DynamicProgramming/medium/countSubstrings');

describe('countSubstrings', () => {
    let solution;

    beforeEach(() => {
        solution = new Solution();
    });

    test('should return the number of palindromic substrings for a string with odd length palindromes', () => {
        const s = "abc";
        const result = solution.countSubstrings(s);
        expect(result).toBe(3); // "a", "b", "c"
    });

    test('should return the number of palindromic substrings for a string with even length palindromes', () => {
        const s = "aaa";
        const result = solution.countSubstrings(s);
        expect(result).toBe(6); // "a", "a", "a", "aa", "aa", "aaa"
    });

    test('should return the number of palindromic substrings for a string with mixed length palindromes', () => {
        const s = "racecar";
        const result = solution.countSubstrings(s);
        expect(result).toBe(10); // "r", "a", "c", "e", "c", "a", "r", "cec", "aceca", "racecar"
    });

    test('should return the number of palindromic substrings for a string with no palindromes longer than 1', () => {
        const s = "abcd";
        const result = solution.countSubstrings(s);
        expect(result).toBe(4); // "a", "b", "c", "d"
    });

    test('should return the number of palindromic substrings for a string with all identical characters', () => {
        const s = "aaaa";
        const result = solution.countSubstrings(s);
        expect(result).toBe(10); // "a", "a", "a", "a", "aa", "aa", "aa", "aaa", "aaa", "aaaa"
    });

    test('should return 0 for an empty string', () => {
        const s = "";
        const result = solution.countSubstrings(s);
        expect(result).toBe(0);
    });
});