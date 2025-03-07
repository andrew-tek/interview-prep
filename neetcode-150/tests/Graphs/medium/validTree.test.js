const Solution = require('../../../src/problems/Graphs/medium/validTree');

describe('validTree', () => {
    let solution;

    beforeEach(() => {
        solution = new Solution();
    });

    test('should return true for a valid tree', () => {
        const n = 5;
        const edges = [[0, 1], [0, 2], [0, 3], [1, 4]];
        const result = solution.validTree(n, edges);
        expect(result).toBe(true);
    });

    test('should return false for a graph with a cycle', () => {
        const n = 5;
        const edges = [[0, 1], [0, 2], [0, 3], [1, 4], [2, 3]];
        const result = solution.validTree(n, edges);
        expect(result).toBe(false);
    });

    test('should return false for a disconnected graph', () => {
        const n = 5;
        const edges = [[0, 1], [2, 3], [3, 4]];
        const result = solution.validTree(n, edges);
        expect(result).toBe(false);
    });

    test('should return true for a single node with no edges', () => {
        const n = 1;
        const edges = [];
        const result = solution.validTree(n, edges);
        expect(result).toBe(true);
    });

    test('should return false for more edges than nodes - 1', () => {
        const n = 4;
        const edges = [[0, 1], [0, 2], [0, 3], [1, 2]];
        const result = solution.validTree(n, edges);
        expect(result).toBe(false);
    });

    test('should return true for a valid tree with multiple components', () => {
        const n = 6;
        const edges = [[0, 1], [0, 2], [2, 3], [3, 4], [4, 5]];
        const result = solution.validTree(n, edges);
        expect(result).toBe(true);
    });
});