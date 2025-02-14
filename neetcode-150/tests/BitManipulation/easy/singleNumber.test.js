const Solution = require('../../../src/problems/BitManipulation/easy/singleNumber');

describe('singleNumber', () => {
    let solution;

    beforeEach(() => {
        solution = new Solution();
    });

    test('should return 1 for nums [2, 2, 1]', () => {
        const nums = [2, 2, 1];
        expect(solution.singleNumber(nums)).toBe(1);
    });

    test('should return 4 for nums [4, 1, 2, 1, 2]', () => {
        const nums = [4, 1, 2, 1, 2];
        expect(solution.singleNumber(nums)).toBe(4);
    });

    test('should return 1 for nums [1]', () => {
        const nums = [1];
        expect(solution.singleNumber(nums)).toBe(1);
    });

    test('should return 0 for nums [0, 1, 1]', () => {
        const nums = [0, 1, 1];
        expect(solution.singleNumber(nums)).toBe(0);
    });

    test('should return -1 for nums [-1, -1, -2, -2, -3, -3, -1]', () => {
        const nums = [-1, -1, -2, -2, -3, -3, -1];
        expect(solution.singleNumber(nums)).toBe(-1);
    });
});