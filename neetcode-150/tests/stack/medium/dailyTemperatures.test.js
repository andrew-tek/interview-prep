const Solution = require('../../../src/problems/stack/medium/dailyTemperatures');

describe('dailyTemperatures', () => {
    let solution;

    beforeEach(() => {
        solution = new Solution();
    });

    test('should return [1, 1, 4, 2, 1, 1, 0, 0] for temperatures [73, 74, 75, 71, 69, 72, 76, 73]', () => {
        const temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
        const result = solution.dailyTemperatures(temperatures);
        expect(result).toEqual([1, 1, 4, 2, 1, 1, 0, 0]);
    });

    test('should return [1, 1, 1, 0] for temperatures [30, 40, 50, 60]', () => {
        const temperatures = [30, 40, 50, 60];
        const result = solution.dailyTemperatures(temperatures);
        expect(result).toEqual([1, 1, 1, 0]);
    });

    test('should return [1, 1, 0] for temperatures [30, 60, 90]', () => {
        const temperatures = [30, 60, 90];
        const result = solution.dailyTemperatures(temperatures);
        expect(result).toEqual([1, 1, 0]);
    });

    test('should return [0, 0, 0] for temperatures [90, 80, 70]', () => {
        const temperatures = [90, 80, 70];
        const result = solution.dailyTemperatures(temperatures);
        expect(result).toEqual([0, 0, 0]);
    });

    test('should return [1, 0] for temperatures [30, 31]', () => {
        const temperatures = [30, 31];
        const result = solution.dailyTemperatures(temperatures);
        expect(result).toEqual([1, 0]);
    });

    test('should return [0] for temperatures [30]', () => {
        const temperatures = [30];
        const result = solution.dailyTemperatures(temperatures);
        expect(result).toEqual([0]);
    });
});