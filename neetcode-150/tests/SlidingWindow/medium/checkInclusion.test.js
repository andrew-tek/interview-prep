const Solution = require('../../../src/problems/SlidingWindow/medium/checkInclusion');

describe('checkInclusion', () => {
    let solution;

    beforeEach(() => {
        solution = new Solution();
    });

    test('should return true for s1 = "ab" and s2 = "eidbaooo"', () => {
        const s1 = "ab";
        const s2 = "eidbaooo";
        const result = solution.checkInclusion(s1, s2);
        expect(result).toBe(true);
    });

    test('should return false for s1 = "ab" and s2 = "eidboaoo"', () => {
        const s1 = "ab";
        const s2 = "eidboaoo";
        const result = solution.checkInclusion(s1, s2);
        expect(result).toBe(false);
    });

    test('should return true for s1 = "adc" and s2 = "dcda"', () => {
        const s1 = "adc";
        const s2 = "dcda";
        const result = solution.checkInclusion(s1, s2);
        expect(result).toBe(true);
    });
});