const Solution = require('../../../src/problems/intervals/medium/eraseOverlapIntervals');

describe('eraseOverlapIntervals', () => {
    let solution;

    beforeEach(() => {
        solution = new Solution();
    });

    test('should return 1 for intervals [[1,2],[2,3],[3,4],[1,3]]', () => {
        const intervals = [[1, 2], [2, 3], [3, 4], [1, 3]];
        const result = solution.eraseOverlapIntervals(intervals);
        expect(result).toBe(1); // Remove [1,3] to make the intervals non-overlapping
    });

    test('should return 2 for intervals [[1,2],[1,2],[1,2]]', () => {
        const intervals = [[1, 2], [1, 2], [1, 2]];
        const result = solution.eraseOverlapIntervals(intervals);
        expect(result).toBe(2); // Remove two intervals to make the intervals non-overlapping
    });

    test('should return 0 for intervals [[1,2],[2,3]]', () => {
        const intervals = [[1, 2], [2, 3]];
        const result = solution.eraseOverlapIntervals(intervals);
        expect(result).toBe(0); // No intervals need to be removed
    });

    test('should return 0 for a single interval', () => {
        const intervals = [[1, 2]];
        const result = solution.eraseOverlapIntervals(intervals);
        expect(result).toBe(0); // No intervals need to be removed
    });

    test('should return 1 for intervals [[1,5],[2,3],[3,4]]', () => {
        const intervals = [[1, 5], [2, 3], [3, 4]];
        const result = solution.eraseOverlapIntervals(intervals);
        expect(result).toBe(1); // Remove [1,5] to make the intervals non-overlapping
    });
});