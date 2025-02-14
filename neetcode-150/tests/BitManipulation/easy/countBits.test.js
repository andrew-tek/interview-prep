const Solution = require('../../../src/problems/BitManipulation/easy/countBits');

describe('countBits', () => {
    let solution;

    beforeEach(() => {
        solution = new Solution();
    });

    test('should return [0] for n = 0', () => {
        const n = 0;
        expect(solution.countBits(n)).toEqual([0]);
    });

    test('should return [0, 1] for n = 1', () => {
        const n = 1;
        expect(solution.countBits(n)).toEqual([0, 1]);
    });

    test('should return [0, 1, 1] for n = 2', () => {
        const n = 2;
        expect(solution.countBits(n)).toEqual([0, 1, 1]);
    });

    test('should return [0, 1, 1, 2] for n = 3', () => {
        const n = 3;
        expect(solution.countBits(n)).toEqual([0, 1, 1, 2]);
    });

    test('should return [0, 1, 1, 2, 1, 2] for n = 5', () => {
        const n = 5;
        expect(solution.countBits(n)).toEqual([0, 1, 1, 2, 1, 2]);
    });

    test('should return [0, 1, 1, 2, 1, 2, 2, 3] for n = 7', () => {
        const n = 7;
        expect(solution.countBits(n)).toEqual([0, 1, 1, 2, 1, 2, 2, 3]);
    });

    test('should return [0, 1, 1, 2, 1, 2, 2, 3, 1, 2] for n = 9', () => {
        const n = 9;
        expect(solution.countBits(n)).toEqual([0, 1, 1, 2, 1, 2, 2, 3, 1, 2]);
    });
});