const Solution = require('../../../src/problems/arrays/medium/groupAnagrams');

describe('groupAnagrams', () => {
    let solution;

    beforeEach(() => {
        solution = new Solution();
    });

    test('should group anagrams together', () => {
        const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
        const result = solution.groupAnagrams(strs);
        const expected = [
            ["eat", "tea", "ate"],
            ["tan", "nat"],
            ["bat"]
        ];
        expect(result).toEqual(expect.arrayContaining(expected));
    });

    test('should handle empty string', () => {
        const strs = [""];
        const result = solution.groupAnagrams(strs);
        const expected = [[""]];
        expect(result).toEqual(expected);
    });

    test('should handle single character strings', () => {
        const strs = ["a"];
        const result = solution.groupAnagrams(strs);
        const expected = [["a"]];
        expect(result).toEqual(expected);
    });

    test('should handle multiple anagrams', () => {
        const strs = ["abc", "bca", "cab", "xyz", "zyx", "yxz"];
        const result = solution.groupAnagrams(strs);
        const expected = [
            ["abc", "bca", "cab"],
            ["xyz", "zyx", "yxz"]
        ];
        expect(result).toEqual(expect.arrayContaining(expected));
    });

    test('should handle no anagrams', () => {
        const strs = ["abc", "def", "ghi"];
        const result = solution.groupAnagrams(strs);
        const expected = [
            ["abc"],
            ["def"],
            ["ghi"]
        ];
        expect(result).toEqual(expect.arrayContaining(expected));
    });
});