const Solution = require('../../../src/problems/TwoPointers/medium/maxArea');

describe('maxArea', () => {
    let solution;

    beforeEach(() => {
        solution = new Solution();
    });

    test('should return 49 for heights [1,8,6,2,5,4,8,3,7]', () => {
        const heights = [1, 8, 6, 2, 5, 4, 8, 3, 7];
        const result = solution.maxArea(heights);
        expect(result).toBe(49);
    });

    test('should return 1 for heights [1,1]', () => {
        const heights = [1, 1];
        const result = solution.maxArea(heights);
        expect(result).toBe(1);
    });

    test('should return 16 for heights [4,3,2,1,4]', () => {
        const heights = [4, 3, 2, 1, 4];
        const result = solution.maxArea(heights);
        expect(result).toBe(16);
    });

    test('should return 2 for heights [1,2,1]', () => {
        const heights = [1, 2, 1];
        const result = solution.maxArea(heights);
        expect(result).toBe(2);
    });

    test('should return 0 for an empty array', () => {
        const heights = [];
        const result = solution.maxArea(heights);
        expect(result).toBe(0);
    });
});