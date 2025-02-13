const Solution = require('../../../src/problems/1D-DynamicProgramming/easy/climbStairs');

describe('climbStairs', () => {
    let solution;

    beforeEach(() => {
        solution = new Solution();
    });

    test('should return 1 for n = 1', () => {
        expect(solution.climbStairs(1)).toBe(1);
    });

    test('should return 2 for n = 2', () => {
        expect(solution.climbStairs(2)).toBe(2);
    });

    test('should return 3 for n = 3', () => {
        expect(solution.climbStairs(3)).toBe(3);
    });

    test('should return 5 for n = 4', () => {
        expect(solution.climbStairs(4)).toBe(5);
    });

    test('should return 8 for n = 5', () => {
        expect(solution.climbStairs(5)).toBe(8);
    });

    test('should return 13 for n = 6', () => {
        expect(solution.climbStairs(6)).toBe(13);
    });

    test('should return 21 for n = 7', () => {
        expect(solution.climbStairs(7)).toBe(21);
    });

    test('should return 34 for n = 8', () => {
        expect(solution.climbStairs(8)).toBe(34);
    });

    test('should return 55 for n = 9', () => {
        expect(solution.climbStairs(9)).toBe(55);
    });

    test('should return 89 for n = 10', () => {
        expect(solution.climbStairs(10)).toBe(89);
    });
});