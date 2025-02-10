const Solution = require('../../../src/problems/arrays/easy/isAnagram');

describe('isAnagram', () => {
    let solution;

    beforeEach(() => {
        solution = new Solution();
    });

    test('should return true for anagrams "listen" and "silent"', () => {
        const s = "listen";
        const t = "silent";
        expect(solution.isAnagram(s, t)).toBe(true);
    });

    test('should return false for non-anagrams "hello" and "world"', () => {
        const s = "hello";
        const t = "world";
        expect(solution.isAnagram(s, t)).toBe(false);
    });

    test('should return true for anagrams "anagram" and "nagaram"', () => {
        const s = "anagram";
        const t = "nagaram";
        expect(solution.isAnagram(s, t)).toBe(true);
    });

    test('should return false for strings of different lengths "rat" and "car"', () => {
        const s = "rat";
        const t = "car";
        expect(solution.isAnagram(s, t)).toBe(false);
    });

    test('should return true for empty strings', () => {
        const s = "";
        const t = "";
        expect(solution.isAnagram(s, t)).toBe(true);
    });

    test('should return false for anagrams with different frequencies "aabbcc" and "abcabc"', () => {
        const s = "aabbcc";
        const t = "abcabc";
        expect(solution.isAnagram(s, t)).toBe(true);
    });

    test('should return false for anagrams with different frequencies "aabbcc" and "abccba"', () => {
        const s = "aabbcc";
        const t = "abccba";
        expect(solution.isAnagram(s, t)).toBe(true);
    });
});