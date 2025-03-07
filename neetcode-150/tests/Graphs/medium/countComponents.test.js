const Solution = require('../../../src/problems/Graphs/medium/countComponents');

describe('countComponents', () => {
    let solution;

    beforeEach(() => {
        solution = new Solution();
    });

    test('should return 2 for a graph with two components', () => {
        const n = 5;
        const edges = [[0, 1], [1, 2], [3, 4]];
        const result = solution.countComponents(n, edges);
        expect(result).toBe(2);
    });

    test('should return 1 for a fully connected graph', () => {
        const n = 5;
        const edges = [[0, 1], [1, 2], [2, 3], [3, 4]];
        const result = solution.countComponents(n, edges);
        expect(result).toBe(1);
    });

    test('should return 5 for a graph with no edges', () => {
        const n = 5;
        const edges = [];
        const result = solution.countComponents(n, edges);
        expect(result).toBe(5);
    });

    test('should return 1 for a graph with a single node', () => {
        const n = 1;
        const edges = [];
        const result = solution.countComponents(n, edges);
        expect(result).toBe(1);
    });

    test('should return 3 for a graph with three components', () => {
        const n = 6;
        const edges = [[0, 1], [2, 3], [4, 5]];
        const result = solution.countComponents(n, edges);
        expect(result).toBe(3);
    });

    test('should return 1 for a graph with multiple connections forming a single component', () => {
        const n = 6;
        const edges = [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0]];
        const result = solution.countComponents(n, edges);
        expect(result).toBe(1);
    });
});