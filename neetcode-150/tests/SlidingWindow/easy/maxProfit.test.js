const Solution = require('../../../src/problems/SlidingWindow/easy/maxProfit');

describe('maxProfit', () => {
    let solution;

    beforeEach(() => {
        solution = new Solution();
    });

    test('should return 5 for prices [7, 1, 5, 3, 6, 4]', () => {
        const prices = [7, 1, 5, 3, 6, 4];
        expect(solution.maxProfit(prices)).toBe(5);
    });

    test('should return 0 for prices [7, 6, 4, 3, 1]', () => {
        const prices = [7, 6, 4, 3, 1];
        expect(solution.maxProfit(prices)).toBe(0);
    });

    test('should return 3 for prices [1, 2, 3, 4]', () => {
        const prices = [1, 2, 3, 4];
        expect(solution.maxProfit(prices)).toBe(3);
    });

    test('should return 0 for prices [1]', () => {
        const prices = [1];
        expect(solution.maxProfit(prices)).toBe(0);
    });

    test('should return 0 for empty prices array', () => {
        const prices = [];
        expect(solution.maxProfit(prices)).toBe(0);
    });

    test('should return 8 for prices [2, 4, 1, 7, 5, 9]', () => {
        const prices = [2, 4, 1, 7, 5, 9];
        expect(solution.maxProfit(prices)).toBe(8);
    });
});