const Solution = require('../../../src/problems/BitManipulation/easy/missingNumber');

describe('missingNumber', () => {
    let solution;

    beforeEach(() => {
        solution = new Solution();
    });

    test('should return 2 for nums [3, 0, 1]', () => {
        const nums = [3, 0, 1];
        expect(solution.missingNumber(nums)).toBe(2);
    });

    test('should return 8 for nums [9,6,4,2,3,5,7,0,1]', () => {
        const nums = [9,6,4,2,3,5,7,0,1];
        expect(solution.missingNumber(nums)).toBe(8);
    });

    test('should return 0 for nums [1]', () => {
        const nums = [1];
        expect(solution.missingNumber(nums)).toBe(0);
    });

    test('should return 1 for nums [0]', () => {
        const nums = [0];
        expect(solution.missingNumber(nums)).toBe(1);
    });

    test('should return 4 for nums [0, 1, 2, 3, 5]', () => {
        const nums = [0, 1, 2, 3, 5];
        expect(solution.missingNumber(nums)).toBe(4);
    });
});