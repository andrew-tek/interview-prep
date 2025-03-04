const Solution = require('../../../src/problems/Backtracking/medium/exists');

describe('exist', () => {
    let solution;

    beforeEach(() => {
        solution = new Solution();
    });

    test('should return true for board and word "ABCCED"', () => {
        const board = [
            ['A', 'B', 'C', 'E'],
            ['S', 'F', 'C', 'S'],
            ['A', 'D', 'E', 'E']
        ];
        const word = 'ABCCED';
        const result = solution.exist(board, word);
        expect(result).toBe(true);
    });

    test('should return true for board and word "SEE"', () => {
        const board = [
            ['A', 'B', 'C', 'E'],
            ['S', 'F', 'C', 'S'],
            ['A', 'D', 'E', 'E']
        ];
        const word = 'SEE';
        const result = solution.exist(board, word);
        expect(result).toBe(true);
    });

    test('should return false for board and word "ABCB"', () => {
        const board = [
            ['A', 'B', 'C', 'E'],
            ['S', 'F', 'C', 'S'],
            ['A', 'D', 'E', 'E']
        ];
        const word = 'ABCB';
        const result = solution.exist(board, word);
        expect(result).toBe(false);
    });

    test('should return false for empty board', () => {
        const board = [[]];
        const word = 'A';
        const result = solution.exist(board, word);
        expect(result).toBe(false);
    });

    test('should return true for single letter board and word "A"', () => {
        const board = [['A']];
        const word = 'A';
        const result = solution.exist(board, word);
        expect(result).toBe(true);
    });

    test('should return false for single letter board and word "B"', () => {
        const board = [['A']];
        const word = 'B';
        const result = solution.exist(board, word);
        expect(result).toBe(false);
    });
});