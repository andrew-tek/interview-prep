const Solution = require('../../../src/problems/MathAndGeometry/easy/plusOne');

describe('plusOne', () => {
    let solution;

    beforeEach(() => {
        solution = new Solution();
    });

    test('should return [1, 2, 4] for digits [1, 2, 3]', () => {
        const digits = [1, 2, 3];
        expect(solution.plusOne(digits)).toEqual([1, 2, 4]);
    });

    test('should return [4, 3, 2, 2] for digits [4, 3, 2, 1]', () => {
        const digits = [4, 3, 2, 1];
        expect(solution.plusOne(digits)).toEqual([4, 3, 2, 2]);
    });

    test('should return [1, 0, 0, 0] for digits [9, 9, 9]', () => {
        const digits = [9, 9, 9];
        expect(solution.plusOne(digits)).toEqual([1, 0, 0, 0]);
    });

    test('should return [1] for digits [0]', () => {
        const digits = [0];
        expect(solution.plusOne(digits)).toEqual([1]);
    });

    test('should return [1, 0] for digits [9]', () => {
        const digits = [9];
        expect(solution.plusOne(digits)).toEqual([1, 0]);
    });
});