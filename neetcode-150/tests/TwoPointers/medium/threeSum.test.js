const Solution = require('../../../src/problems/TwoPointers/medium/threeSum');

describe('threeSum', () => {
    let solution;

    beforeEach(() => {
        solution = new Solution();
    });

    test('should return [[-1, -1, 2], [-1, 0, 1]] for nums [-1, 0, 1, 2, -1, -4]', () => {
        const nums = [-1, 0, 1, 2, -1, -4];
        const result = solution.threeSum(nums);
        expect(result).toEqual(expect.arrayContaining([[-1, -1, 2], [-1, 0, 1]]));
    });

    test('should return [] for nums [0, 1, 1]', () => {
        const nums = [0, 1, 1];
        const result = solution.threeSum(nums);
        expect(result).toEqual([]);
    });

    test('should return [[0, 0, 0]] for nums [0, 0, 0]', () => {
        const nums = [0, 0, 0];
        const result = solution.threeSum(nums);
        expect(result).toEqual([[0, 0, 0]]);
    });

    test('should return [[-2, 0, 2], [-2, 1, 1]] for nums [-2, 0, 1, 1, 2]', () => {
        const nums = [-2, 0, 1, 1, 2];
        const result = solution.threeSum(nums);
        expect(result).toEqual(expect.arrayContaining([[-2, 0, 2], [-2, 1, 1]]));
    });

    test('should return [] for an empty array', () => {
        const nums = [];
        const result = solution.threeSum(nums);
        expect(result).toEqual([]);
    });
});