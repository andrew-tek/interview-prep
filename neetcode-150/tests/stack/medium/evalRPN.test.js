const Solution = require('../../../src/problems/stack/medium/evalRPN');

describe('evalRPN', () => {
    let solution;

    beforeEach(() => {
        solution = new Solution();
    });

    test('should return 9 for tokens ["2", "1", "+", "3", "*"]', () => {
        const tokens = ["2", "1", "+", "3", "*"];
        const result = solution.evalRPN(tokens);
        expect(result).toBe(9);
    });

    test('should return 6 for tokens ["4", "13", "5", "/", "+"]', () => {
        const tokens = ["4", "13", "5", "/", "+"];
        const result = solution.evalRPN(tokens);
        expect(result).toBe(6);
    });

    test('should return 22 for tokens ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]', () => {
        const tokens = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"];
        const result = solution.evalRPN(tokens);
        expect(result).toBe(22);
    });

    test('should return 0 for tokens ["0"]', () => {
        const tokens = ["0"];
        const result = solution.evalRPN(tokens);
        expect(result).toBe(0);
    });
});