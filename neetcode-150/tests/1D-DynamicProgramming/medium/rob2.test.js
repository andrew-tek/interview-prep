const Solution = require('../../../src/problems/1D-DynamicProgramming/medium/rob2');

describe('rob', () => {
    let solution;

    beforeEach(() => {
        solution = new Solution();
    });

    test('should return 0 for an empty array', () => {
        const nums = [];
        const result = solution.rob(nums);
        expect(result).toBe(0);
    });

    test('should return the only element for an array with one element', () => {
        const nums = [5];
        const result = solution.rob(nums);
        expect(result).toBe(5);
    });

    test('should return the maximum amount for an array with two elements', () => {
        const nums = [1, 2];
        const result = solution.rob(nums);
        expect(result).toBe(2);
    });

    test('should return the maximum amount for an array with three elements', () => {
        const nums = [3, 4, 3];
        const result = solution.rob(nums);
        expect(result).toBe(4);
    });

    test('should return the maximum amount for an array with multiple elements', () => {
        const nums = [2, 9, 8, 3, 6];
        const result = solution.rob(nums);
        expect(result).toBe(15);
    });

    test('should return the maximum amount for an array with multiple elements', () => {
        const nums = [2, 1, 1, 2];
        const result = solution.rob(nums);
        expect(result).toBe(3);
    });

    test('should return the maximum amount for an array with multiple elements', () => {
        const nums = [1, 2, 3, 1];
        const result = solution.rob(nums);
        expect(result).toBe(4);
    });

    test('should return the maximum amount for an array with multiple elements', () => {
        const nums = [2, 1, 1, 2, 1, 2];
        const result = solution.rob(nums);
        expect(result).toBe(5);
    });
});