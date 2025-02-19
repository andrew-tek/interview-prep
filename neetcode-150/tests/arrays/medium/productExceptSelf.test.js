const Solution = require('../../../src/problems/arrays/medium/productExceptSelf');

describe('productExceptSelf', () => {
    let solution;

    beforeEach(() => {
        solution = new Solution();
    });

    test('should return [24, 12, 8, 6] for nums [1, 2, 3, 4]', () => {
        const nums = [1, 2, 3, 4];
        const result = solution.productExceptSelf(nums);
        expect(result).toEqual([24, 12, 8, 6]);
    });

    test('should return [0, 0, 9, 0, 0] for nums [-1, 1, 0, -3, 3]', () => {
        const nums = [-1, 1, 0, -3, 3];
        const result = solution.productExceptSelf(nums);
        expect(result).toEqual([-0, 0, 9, -0, 0]);
    });

    test('should return [2, 1] for nums [1, 2]', () => {
        const nums = [1, 2];
        const result = solution.productExceptSelf(nums);
        expect(result).toEqual([2, 1]);
    });

    test('should return [0, 0, 0, 0] for nums [0, 0, 0, 0]', () => {
        const nums = [0, 0, 0, 0];
        const result = solution.productExceptSelf(nums);
        expect(result).toEqual([0, 0, 0, 0]);
    });

    test('should return [120, 60, 40, 30, 24] for nums [1, 2, 3, 4, 5]', () => {
        const nums = [1, 2, 3, 4, 5];
        const result = solution.productExceptSelf(nums);
        expect(result).toEqual([120, 60, 40, 30, 24]);
    });
});