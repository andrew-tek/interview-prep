const Solution = require('../../../src/problems/intervals/medium/merge');

describe('merge', () => {
    let solution;

    beforeEach(() => {
        solution = new Solution();
    });

    test('should merge overlapping intervals', () => {
        const intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];
        const result = solution.merge(intervals);
        expect(result).toEqual([[1, 6], [8, 10], [15, 18]]);
    });

    test('should handle intervals that are already merged', () => {
        const intervals = [[1, 4], [4, 5]];
        const result = solution.merge(intervals);
        expect(result).toEqual([[1, 5]]);
    });

    test('should handle a single interval', () => {
        const intervals = [[1, 3]];
        const result = solution.merge(intervals);
        expect(result).toEqual([[1, 3]]);
    });

    test('should handle non-overlapping intervals', () => {
        const intervals = [[1, 2], [3, 4], [5, 6]];
        const result = solution.merge(intervals);
        expect(result).toEqual([[1, 2], [3, 4], [5, 6]]);
    });

    test('should handle intervals with complete overlap', () => {
        const intervals = [[1, 10], [2, 6], [8, 10]];
        const result = solution.merge(intervals);
        expect(result).toEqual([[1, 10]]);
    });

    test('should handle unsorted intervals', () => {
        const intervals = [[8, 10], [1, 3], [2, 6], [15, 18]];
        const result = solution.merge(intervals);
        expect(result).toEqual([[1, 6], [8, 10], [15, 18]]);
    });

    test('should handle intervals with no overlap but touching boundaries', () => {
        const intervals = [[1, 2], [2, 3], [3, 4]];
        const result = solution.merge(intervals);
        expect(result).toEqual([[1, 4]]);
    });

    test('should handle intervals with a single point overlap', () => {
        const intervals = [[1, 2], [2, 2], [2, 3]];
        const result = solution.merge(intervals);
        expect(result).toEqual([[1, 3]]);
    });
});