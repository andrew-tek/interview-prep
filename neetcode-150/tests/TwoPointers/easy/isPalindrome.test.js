const Solution = require('../../../src/problems/TwoPointers/easy/isPalindrome');

describe('isPalindrome', () => {
    let solution;

    beforeEach(() => {
        solution = new Solution();
    });

    test('should return true for "A man, a plan, a canal: Panama"', () => {
        const s = "A man, a plan, a canal: Panama";
        expect(solution.isPalindrome(s)).toBe(true);
    });

    test('should return false for "race a car"', () => {
        const s = "race a car";
        expect(solution.isPalindrome(s)).toBe(false);
    });

    test('should return true for an empty string', () => {
        const s = "";
        expect(solution.isPalindrome(s)).toBe(true);
    });

    test('should return true for " " (single space)', () => {
        const s = " ";
        expect(solution.isPalindrome(s)).toBe(true);
    });

    test('should return false for "0P"', () => {
        const s = "0P";
        expect(solution.isPalindrome(s)).toBe(false);
    });

    test('should return true for "No lemon, no melon"', () => {
        const s = "No lemon, no melon";
        expect(solution.isPalindrome(s)).toBe(true);
    });

    test('should return true for "Was it a car or a cat I saw?"', () => {
        const s = "Was it a car or a cat I saw?";
        expect(solution.isPalindrome(s)).toBe(true);
    });

    test('should return false for "Hello, World!"', () => {
        const s = "Hello, World!";
        expect(solution.isPalindrome(s)).toBe(false);
    });
});