const Solution = require('../../../src/problems/TwoPointers/medium/twoSum2');

describe('twoSum', () => {
    let solution;

    beforeEach(() => {
        solution = new Solution();
    });

    test('should return [1, 2] for numbers [2, 7, 11, 15] and target 9', () => {
        const numbers = [2, 7, 11, 15];
        const target = 9;
        const result = solution.twoSum(numbers, target);
        expect(result).toEqual([1, 2]);
    });

    test('should return [1, 3] for numbers [2, 3, 4] and target 6', () => {
        const numbers = [2, 3, 4];
        const target = 6;
        const result = solution.twoSum(numbers, target);
        expect(result).toEqual([1, 3]);
    });

    test('should return [1, 2] for numbers [-1, 0] and target -1', () => {
        const numbers = [-1, 0];
        const target = -1;
        const result = solution.twoSum(numbers, target);
        expect(result).toEqual([1, 2]);
    });

    test('should return [2, 4] for numbers [1, 2, 3, 4] and target 6', () => {
        const numbers = [1, 2, 3, 4];
        const target = 6;
        const result = solution.twoSum(numbers, target);
        expect(result).toEqual([2, 4]);
    });

    test('should return [] for numbers [1, 2, 3, 4] and target 10', () => {
        const numbers = [1, 2, 3, 4];
        const target = 10;
        const result = solution.twoSum(numbers, target);
        expect(result).toEqual([]);
    });
});