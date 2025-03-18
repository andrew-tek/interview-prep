const Solution = require('../../../src/problems/MathAndGeometry/medium/setZeroes');

describe('setZeroes', () => {
    let solution;

    beforeEach(() => {
        solution = new Solution();
    });

    test('should set rows and columns to zero for a 3x3 matrix', () => {
        const matrix = [
            [1, 1, 1],
            [1, 0, 1],
            [1, 1, 1]
        ];
        solution.setZeroes(matrix);
        expect(matrix).toEqual([
            [1, 0, 1],
            [0, 0, 0],
            [1, 0, 1]
        ]);
    });

    test('should set rows and columns to zero for a 4x4 matrix', () => {
        const matrix = [
            [0, 1, 2, 0],
            [3, 4, 5, 2],
            [1, 3, 1, 5],
            [1, 1, 1, 1]
        ];
        solution.setZeroes(matrix);
        expect(matrix).toEqual([
            [0, 0, 0, 0],
            [0, 4, 5, 0],
            [0, 3, 1, 0],
            [0, 1, 1, 0]
        ]);
    });

    test('should handle a single column matrix', () => {
        const matrix = [[1], [0], [3]];
        solution.setZeroes(matrix);
        expect(matrix).toEqual([[0], [0], [0]]);
    });

    test('should handle a matrix with no zeros', () => {
        const matrix = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ];
        solution.setZeroes(matrix);
        expect(matrix).toEqual([
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ]);
    });

    test('should handle a matrix with all zeros', () => {
        const matrix = [
            [0, 0],
            [0, 0]
        ];
        solution.setZeroes(matrix);
        expect(matrix).toEqual([
            [0, 0],
            [0, 0]
        ]);
    });

    test('should handle a 1x1 matrix with a zero', () => {
        const matrix = [[0]];
        solution.setZeroes(matrix);
        expect(matrix).toEqual([[0]]);
    });

    test('should handle a 1x1 matrix with no zero', () => {
        const matrix = [[1]];
        solution.setZeroes(matrix);
        expect(matrix).toEqual([[1]]);
    });
});