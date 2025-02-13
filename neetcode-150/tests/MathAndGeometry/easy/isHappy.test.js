const Solution = require('../../../src/problems/MathAndGeometry/easy/isHappy');

describe('isHappy', () => {
    let solution;

    beforeEach(() => {
        solution = new Solution();
    });

    test('should return true for happy number 19', () => {
        expect(solution.isHappy(19)).toBe(true);
    });

    test('should return false for non-happy number 2', () => {
        expect(solution.isHappy(2)).toBe(false);
    });

    test('should return true for happy number 1', () => {
        expect(solution.isHappy(1)).toBe(true);
    });

    test('should return false for non-happy number 4', () => {
        expect(solution.isHappy(4)).toBe(false);
    });

    test('should return true for happy number 7', () => {
        expect(solution.isHappy(7)).toBe(true);
    });

    test('should return false for non-happy number 20', () => {
        expect(solution.isHappy(20)).toBe(false);
    });
});