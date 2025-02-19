const Solution = require('../../../src/problems/arrays/medium/longestConsecutive');

describe('longestConsecutive', () => {
    let solution;

    beforeEach(() => {
        solution = new Solution();
    });

    test('should return 4 for nums [100, 4, 200, 1, 3, 2]', () => {
        const nums = [100, 4, 200, 1, 3, 2];
        const result = solution.longestConsecutive(nums);
        expect(result).toBe(4);
    });

    test('should return 9 for nums [0,3,7,2,5,8,4,6,0,1]', () => {
        const nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
        const result = solution.longestConsecutive(nums);
        expect(result).toBe(9);
    });

    test('should return 1 for nums [1]', () => {
        const nums = [1];
        const result = solution.longestConsecutive(nums);
        expect(result).toBe(1);
    });

    test('should return 0 for an empty array', () => {
        const nums = [];
        const result = solution.longestConsecutive(nums);
        expect(result).toBe(0);
    });

    test('should return 3 for nums [1, 2, 0, 1]', () => {
        const nums = [1, 2, 0, 1];
        const result = solution.longestConsecutive(nums);
        expect(result).toBe(3);
    });

    test('should return 4 for nums [9,1,4,7,3,-1,0,5,8,-1,6]', () => {
        const nums = [9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6];
        const result = solution.longestConsecutive(nums);
        expect(result).toBe(7);
    });
});