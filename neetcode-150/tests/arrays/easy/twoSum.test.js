const Solution = require('../../../src/problems/arrays/easy/twoSum');

describe('twoSum', () => {
    let solution;

    beforeEach(() => {
        solution = new Solution();
    });

    test('should return indices [0, 1] for nums [2, 7, 11, 15] and target 9', () => {
        const nums = [2, 7, 11, 15];
        const target = 9;
        expect(solution.twoSum(nums, target)).toEqual([1, 0]);
    });

    test('should return indices [1, 2] for nums [3, 2, 4] and target 6', () => {
        const nums = [3, 2, 4];
        const target = 6;
        expect(solution.twoSum(nums, target)).toEqual([2, 1]);
    });

    test('should return indices [0, 1] for nums [3, 3] and target 6', () => {
        const nums = [3, 3];
        const target = 6;
        expect(solution.twoSum(nums, target)).toEqual([1, 0]);
    });

    test('should return indices [0, 2] for nums [1, 2, 3, 4] and target 4', () => {
        const nums = [1, 2, 3, 4];
        const target = 4;
        expect(solution.twoSum(nums, target)).toEqual([2, 0]);
    });

    test('should return undefined for nums [1, 2, 3, 4] and target 10', () => {
        const nums = [1, 2, 3, 4];
        const target = 10;
        expect(solution.twoSum(nums, target)).toBeUndefined();
    });
});