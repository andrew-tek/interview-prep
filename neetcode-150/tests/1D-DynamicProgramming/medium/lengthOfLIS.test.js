const Solution = require('../../../src/problems/1D-DynamicProgramming/medium/lengthOfLIS');

describe('lengthOfLIS', () => {
    let solution;

    beforeEach(() => {
        solution = new Solution();
    });

    test('should return 4 for input [10, 9, 2, 5, 3, 7, 101, 18]', () => {
        const nums = [10, 9, 2, 5, 3, 7, 101, 18];
        const result = solution.lengthOfLIS(nums);
        expect(result).toBe(4); // The longest increasing subsequence is [2, 3, 7, 101]
    });

    test('should return 4 for input [0, 1, 0, 3, 2, 3]', () => {
        const nums = [0, 1, 0, 3, 2, 3];
        const result = solution.lengthOfLIS(nums);
        expect(result).toBe(4); // The longest increasing subsequence is [0, 1, 2, 3]
    });

    test('should return 1 for input [7, 7, 7, 7, 7, 7, 7]', () => {
        const nums = [7, 7, 7, 7, 7, 7, 7];
        const result = solution.lengthOfLIS(nums);
        expect(result).toBe(1); // The longest increasing subsequence is [7]
    });

    test('should return 6 for input [1, 3, 6, 7, 9, 4, 10, 5, 6]', () => {
        const nums = [1, 3, 6, 7, 9, 4, 10, 5, 6];
        const result = solution.lengthOfLIS(nums);
        expect(result).toBe(6); // The longest increasing subsequence is [1, 3, 6, 7, 9, 10]
    });

    test('should return 1 for input [10]', () => {
        const nums = [10];
        const result = solution.lengthOfLIS(nums);
        expect(result).toBe(1); // The longest increasing subsequence is [10]
    });
});