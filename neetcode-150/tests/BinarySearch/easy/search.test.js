const Solution = require('../../../src/problems/BinarySearch/easy/search');

describe('search', () => {
    let solution;

    beforeEach(() => {
        solution = new Solution();
    });

    test('should return 4 for nums [1, 2, 3, 4, 5, 6, 7] and target 5', () => {
        const nums = [1, 2, 3, 4, 5, 6, 7];
        const target = 5;
        expect(solution.search(nums, target)).toBe(4);
    });

    test('should return -1 for nums [1, 2, 3, 4, 5, 6, 7] and target 8', () => {
        const nums = [1, 2, 3, 4, 5, 6, 7];
        const target = 8;
        expect(solution.search(nums, target)).toBe(-1);
    });

    test('should return 0 for nums [1, 2, 3, 4, 5, 6, 7] and target 1', () => {
        const nums = [1, 2, 3, 4, 5, 6, 7];
        const target = 1;
        expect(solution.search(nums, target)).toBe(0);
    });

    test('should return 6 for nums [1, 2, 3, 4, 5, 6, 7] and target 7', () => {
        const nums = [1, 2, 3, 4, 5, 6, 7];
        const target = 7;
        expect(solution.search(nums, target)).toBe(6);
    });

    test('should return -1 for an empty array and any target', () => {
        const nums = [];
        const target = 1;
        expect(solution.search(nums, target)).toBe(-1);
    });

    test('should return 0 for nums [1] and target 1', () => {
        const nums = [1];
        const target = 1;
        expect(solution.search(nums, target)).toBe(0);
    });

    test('should return -1 for nums [1] and target 2', () => {
        const nums = [1];
        const target = 2;
        expect(solution.search(nums, target)).toBe(-1);
    });
});