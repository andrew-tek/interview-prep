const Solution = require('../../../src/problems/arrays/easy/hasDuplicate');

describe('hasDuplicate', () => {
    let solution;

    beforeEach(() => {
        solution = new Solution();
    });

    test('should return true for array with duplicates', () => {
        const nums = [1, 2, 3, 1];
        expect(solution.hasDuplicate(nums)).toBe(true);
    });

    test('should return false for array without duplicates', () => {
        const nums = [1, 2, 3, 4];
        expect(solution.hasDuplicate(nums)).toBe(false);
    });

    test('should return false for empty array', () => {
        const nums = [];
        expect(solution.hasDuplicate(nums)).toBe(false);
    });

    test('should return false for array with one element', () => {
        const nums = [1];
        expect(solution.hasDuplicate(nums)).toBe(false);
    });
});