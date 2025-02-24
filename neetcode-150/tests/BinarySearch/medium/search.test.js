const Solution = require('../../../src/problems/BinarySearch/medium/findMin');

describe('findMin', () => {
    let solution;

    beforeEach(() => {
        solution = new Solution();
    });

    test('should return 1 for nums [3, 4, 5, 1, 2]', () => {
        const nums = [3, 4, 5, 1, 2];
        const result = solution.findMin(nums);
        expect(result).toBe(1);
    });

    test('should return 0 for nums [4, 5, 6, 7, 0, 1, 2]', () => {
        const nums = [4, 5, 6, 7, 0, 1, 2];
        const result = solution.findMin(nums);
        expect(result).toBe(0);
    });

    test('should return 11 for nums [11, 13, 15, 17]', () => {
        const nums = [11, 13, 15, 17];
        const result = solution.findMin(nums);
        expect(result).toBe(11);
    });

    test('should return 1 for nums [2, 1]', () => {
        const nums = [2, 1];
        const result = solution.findMin(nums);
        expect(result).toBe(1);
    });

    test('should return 1 for nums [1]', () => {
        const nums = [1];
        const result = solution.findMin(nums);
        expect(result).toBe(1);
    });
});