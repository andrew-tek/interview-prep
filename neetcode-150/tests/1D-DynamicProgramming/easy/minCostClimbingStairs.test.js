const Solution = require('../../../src/problems/1D-DynamicProgramming/easy/minCostClimbingStairs');

describe('minCostClimbingStairs', () => {
    let solution;

    beforeEach(() => {
        solution = new Solution();
    });

    test('should return 15 for cost [10, 15, 20]', () => {
        const cost = [10, 15, 20];
        expect(solution.minCostClimbingStairs(cost)).toBe(15);
    });

    test('should return 6 for cost [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]', () => {
        const cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];
        expect(solution.minCostClimbingStairs(cost)).toBe(6);
    });

    test('should return 0 for cost [0, 0, 0, 0]', () => {
        const cost = [0, 0, 0, 0];
        expect(solution.minCostClimbingStairs(cost)).toBe(0);
    });

    test('should return 1 for cost [1, 100]', () => {
        const cost = [1, 100];
        expect(solution.minCostClimbingStairs(cost)).toBe(1);
    });

    test('should return 0 for an empty array', () => {
        const cost = [];
        expect(solution.minCostClimbingStairs(cost)).toBe(0);
    });
});