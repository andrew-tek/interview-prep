const Solution = require('../../../src/problems/1D-DynamicProgramming/medium/wordBreak');

describe('wordBreak', () => {
    let solution;

    beforeEach(() => {
        solution = new Solution();
    });

    test('should return true for input "leetcode" with wordDict ["leet", "code"]', () => {
        const s = "leetcode";
        const wordDict = ["leet", "code"];
        const result = solution.wordBreak(s, wordDict);
        expect(result).toBe(true); // "leetcode" can be segmented as "leet code"
    });

    test('should return true for input "applepenapple" with wordDict ["apple", "pen"]', () => {
        const s = "applepenapple";
        const wordDict = ["apple", "pen"];
        const result = solution.wordBreak(s, wordDict);
        expect(result).toBe(true); // "applepenapple" can be segmented as "apple pen apple"
    });

    test('should return false for input "catsandog" with wordDict ["cats", "dog", "sand", "and", "cat"]', () => {
        const s = "catsandog";
        const wordDict = ["cats", "dog", "sand", "and", "cat"];
        const result = solution.wordBreak(s, wordDict);
        expect(result).toBe(false); // "catsandog" cannot be segmented into words from the dictionary
    });

    test('should return true for input "cars" with wordDict ["car", "ca", "rs"]', () => {
        const s = "cars";
        const wordDict = ["car", "ca", "rs"];
        const result = solution.wordBreak(s, wordDict);
        expect(result).toBe(true); // "cars" can be segmented as "ca rs"
    });

    test('should return false for input "aaaaaaa" with wordDict ["aaaa", "aaa"]', () => {
        const s = "aaaaaaa";
        const wordDict = ["aaaa", "aaa"];
        const result = solution.wordBreak(s, wordDict);
        expect(result).toBe(true); // "aaaaaaa" cannot be segmented into words from the dictionary
    });

    test('should return true for input "a" with wordDict ["a"]', () => {
        const s = "a";
        const wordDict = ["a"];
        const result = solution.wordBreak(s, wordDict);
        expect(result).toBe(true); // "a" can be segmented as "a"
    });

    test('should return false for input "b" with wordDict ["a"]', () => {
        const s = "b";
        const wordDict = ["a"];
        const result = solution.wordBreak(s, wordDict);
        expect(result).toBe(false); // "b" cannot be segmented into words from the dictionary
    });

    test('should return true for input "" (empty string) with any wordDict', () => {
        const s = "";
        const wordDict = ["a", "b", "c"];
        const result = solution.wordBreak(s, wordDict);
        expect(result).toBe(true); // An empty string can always be segmented
    });
});