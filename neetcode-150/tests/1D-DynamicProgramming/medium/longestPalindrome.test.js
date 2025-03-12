const Solution = require('../../../src/problems/1D-DynamicProgramming/medium/longestPalindrome');

describe('longestPalindrome', () => {
    let solution;

    beforeEach(() => {
        solution = new Solution();
    });

    test('should return the longest palindrome for a string with odd length palindrome', () => {
        const s = "babad";
        const result = solution.longestPalindrome(s);
        expect(result).toBe("bab"); // "aba" is also a valid answer
    });

    test('should return the longest palindrome for a string with even length palindrome', () => {
        const s = "cbbd";
        const result = solution.longestPalindrome(s);
        expect(result).toBe("bb");
    });

    test('should return the entire string if it is a palindrome', () => {
        const s = "racecar";
        const result = solution.longestPalindrome(s);
        expect(result).toBe("racecar");
    });

    test('should return the first character for a string with no palindrome longer than 1', () => {
        const s = "abc";
        const result = solution.longestPalindrome(s);
        expect(result).toBe("a"); // "b" or "c" are also valid answers
    });

    test('should return the longest palindrome for a string with multiple palindromes', () => {
        const s = "forgeeksskeegfor";
        const result = solution.longestPalindrome(s);
        expect(result).toBe("geeksskeeg");
    });

    test('should return the longest palindrome for a string with all identical characters', () => {
        const s = "aaaa";
        const result = solution.longestPalindrome(s);
        expect(result).toBe("aaaa");
    });

    test('should return an empty string for an empty input', () => {
        const s = "";
        const result = solution.longestPalindrome(s);
        expect(result).toBe("");
    });

    test('should return the longest palindrome for a string with special characters', () => {
        const s = "a!@#b#@!a";
        const result = solution.longestPalindrome(s);
        expect(result).toBe("a!@#b#@!a");
    });
});