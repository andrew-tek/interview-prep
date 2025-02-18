const Solution = require('../../../src/problems/arrays/medium/topKFrequent');

describe('topKFrequent', () => {
    let solution;

    beforeEach(() => {
        solution = new Solution();
    });

    test('should return [2, 3] for nums [1, 2, 2, 3, 3, 3] and k = 2', () => {
        const nums = [1, 2, 2, 3, 3, 3];
        const k = 2;
        const result = solution.topKFrequent(nums, k);
        expect(result).toEqual(expect.arrayContaining([2, 3]));
    });

    test('should return [7] for nums [7, 7] and k = 1', () => {
        const nums = [7, 7];
        const k = 1;
        const result = solution.topKFrequent(nums, k);
        expect(result).toEqual([7]);
    });

    test('should return [1] for nums [1] and k = 1', () => {
        const nums = [1];
        const k = 1;
        const result = solution.topKFrequent(nums, k);
        expect(result).toEqual([1]);
    });

    test('should return [1, 2] for nums [1, 1, 2, 2, 3] and k = 2', () => {
        const nums = [1, 1, 2, 2, 3];
        const k = 2;
        const result = solution.topKFrequent(nums, k);
        expect(result).toEqual(expect.arrayContaining([1, 2]));
    });

    test('should return [1, 2, 3] for nums [1, 1, 2, 2, 3, 3] and k = 3', () => {
        const nums = [1, 1, 2, 2, 3, 3];
        const k = 3;
        const result = solution.topKFrequent(nums, k);
        expect(result).toEqual(expect.arrayContaining([1, 2, 3]));
    });
});