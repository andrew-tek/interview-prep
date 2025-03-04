const Solution = require('../../../src/problems/Backtracking/medium/combinationSums');

describe('combinationSum', () => {
    let solution;

    beforeEach(() => {
        solution = new Solution();
    });

    test('should return [[2, 2, 3], [7]] for nums [2, 3, 6, 7] and target 7', () => {
        const nums = [2, 3, 6, 7];
        const target = 7;
        const result = solution.combinationSum(nums, target);
        expect(result).toEqual(expect.arrayContaining([[2, 2, 3], [7]]));
    });

    test('should return [[2, 2, 2, 2], [2, 3, 3], [3, 5]] for nums [2, 3, 5] and target 8', () => {
        const nums = [2, 3, 5];
        const target = 8;
        const result = solution.combinationSum(nums, target);
        expect(result).toEqual(expect.arrayContaining([[2, 2, 2, 2], [2, 3, 3], [3, 5]]));
    });

    test('should return [] for nums [2] and target 1', () => {
        const nums = [2];
        const target = 1;
        const result = solution.combinationSum(nums, target);
        expect(result).toEqual([]);
    });

    test('should return [[1, 1, 1, 1, 1, 1, 1]] for nums [1] and target 7', () => {
        const nums = [1];
        const target = 7;
        const result = solution.combinationSum(nums, target);
        expect(result).toEqual([[1, 1, 1, 1, 1, 1, 1]]);
    });

    test('should return [] for an empty nums array and target 7', () => {
        const nums = [];
        const target = 7;
        const result = solution.combinationSum(nums, target);
        expect(result).toEqual([]);
    });
});