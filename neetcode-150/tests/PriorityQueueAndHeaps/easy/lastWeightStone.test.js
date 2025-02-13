const { MaxPriorityQueue } = require('@datastructures-js/priority-queue');
const Solution = require('../../../src/problems/PriorityQueueAndHeaps/easy/lastWeightStone');

describe('lastStoneWeight', () => {
    let solution;

    beforeEach(() => {
        solution = new Solution();
    });

    test('should return 1 for stones [2, 7, 4, 1, 8, 1]', () => {
        const stones = [2, 7, 4, 1, 8, 1];
        expect(solution.lastStoneWeight(stones)).toBe(1);
    });

    test('should return 0 for stones [1, 1]', () => {
        const stones = [1, 1];
        expect(solution.lastStoneWeight(stones)).toBe(0);
    });

    test('should return 1 for stones [1]', () => {
        const stones = [1];
        expect(solution.lastStoneWeight(stones)).toBe(1);
    });

    test('should return 0 for an empty array', () => {
        const stones = [];
        expect(solution.lastStoneWeight(stones)).toBe(0);
    });

    test('should return 2 for stones [10, 4, 2, 10]', () => {
        const stones = [10, 4, 2, 10];
        expect(solution.lastStoneWeight(stones)).toBe(2);
    });
});