const Solution = require('../../../src/problems/Graphs/medium/numIslands');

describe('numIslands', () => {
    let solution;

    beforeEach(() => {
        solution = new Solution();
    });

    test('should return 1 for a single island', () => {
        const grid = [
            ['1', '1', '1', '1', '0'],
            ['1', '1', '0', '1', '0'],
            ['1', '1', '0', '0', '0'],
            ['0', '0', '0', '0', '0']
        ];
        const result = solution.numIslands(grid);
        expect(result).toBe(1);
    });

    test('should return 3 for three separate islands', () => {
        const grid = [
            ['1', '1', '0', '0', '0'],
            ['1', '1', '0', '0', '0'],
            ['0', '0', '1', '0', '0'],
            ['0', '0', '0', '1', '1']
        ];
        const result = solution.numIslands(grid);
        expect(result).toBe(3);
    });

    test('should return 0 for no islands', () => {
        const grid = [
            ['0', '0', '0', '0', '0'],
            ['0', '0', '0', '0', '0'],
            ['0', '0', '0', '0', '0'],
            ['0', '0', '0', '0', '0']
        ];
        const result = solution.numIslands(grid);
        expect(result).toBe(0);
    });

    test('should return 1 for a single island with complex shape', () => {
        const grid = [
            ['1', '0', '1', '1', '0'],
            ['1', '0', '0', '1', '0'],
            ['1', '1', '1', '1', '0'],
            ['0', '0', '0', '0', '0']
        ];
        const result = solution.numIslands(grid);
        expect(result).toBe(1);
    });

    test('should return 1 for a single island with all land', () => {
        const grid = [
            ['1', '1', '1'],
            ['1', '1', '1'],
            ['1', '1', '1']
        ];
        const result = solution.numIslands(grid);
        expect(result).toBe(1);
    });
});