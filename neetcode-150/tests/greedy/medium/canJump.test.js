const Solution = require('../../../src/problems/greedy/medium/canJump');

describe('canJump', () => {
    let solution;

    beforeEach(() => {
        solution = new Solution();
    });

    test('should return true for input [2,3,1,1,4]', () => {
        const nums = [2, 3, 1, 1, 4];
        const result = solution.canJump(nums);
        expect(result).toBe(true); // You can jump from index 0 -> 1 -> 4
    });

    test('should return false for input [3,2,1,0,4]', () => {
        const nums = [3, 2, 1, 0, 4];
        const result = solution.canJump(nums);
        expect(result).toBe(false); // You cannot reach the last index
    });

    test('should return true for input [0]', () => {
        const nums = [0];
        const result = solution.canJump(nums);
        expect(result).toBe(true); // Single element, already at the last index
    });

    test('should return true for input [2,0,0]', () => {
        const nums = [2, 0, 0];
        const result = solution.canJump(nums);
        expect(result).toBe(true); // You can jump directly to the last index
    });

    test('should return false for input [1,0,0]', () => {
        const nums = [1, 0, 0];
        const result = solution.canJump(nums);
        expect(result).toBe(false); // You cannot reach the last index
    });

    test('should return true for input [10,9,8,7,6,5,4,3,2,1,0]', () => {
        const nums = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
        const result = solution.canJump(nums);
        expect(result).toBe(true); // You can jump directly to the last index
    });

    test('should return false for input [0,2,3]', () => {
        const nums = [0, 2, 3];
        const result = solution.canJump(nums);
        expect(result).toBe(false); // You cannot move from the first index
    });

    test('should return true for input [1,1,1,1]', () => {
        const nums = [1, 1, 1, 1];
        const result = solution.canJump(nums);
        expect(result).toBe(true); // You can jump one step at a time to the last index
    });
});