const Solution = require('../../../src/problems/SlidingWindow/medium/lengthOfLongestSubstring');

describe('lengthOfLongestSubstring', () => {
    let solution;

    beforeEach(() => {
        solution = new Solution();
    });

    test('should return 3 for string "abcabcbb"', () => {
        const s = "abcabcbb";
        const result = solution.lengthOfLongestSubstring(s);
        expect(result).toBe(3);
    });

    test('should return 1 for string "bbbbb"', () => {
        const s = "bbbbb";
        const result = solution.lengthOfLongestSubstring(s);
        expect(result).toBe(1);
    });

    test('should return 3 for string "pwwkew"', () => {
        const s = "pwwkew";
        const result = solution.lengthOfLongestSubstring(s);
        expect(result).toBe(3);
    });

    test('should return 0 for an empty string', () => {
        const s = "";
        const result = solution.lengthOfLongestSubstring(s);
        expect(result).toBe(0);
    });

    test('should return 5 for string "tmmzuxt"', () => {
        const s = "tmmzuxt";
        const result = solution.lengthOfLongestSubstring(s);
        expect(result).toBe(5);
    });

    test('should return 6 for string "abcdef"', () => {
        const s = "abcdef";
        const result = solution.lengthOfLongestSubstring(s);
        expect(result).toBe(6);
    });
});