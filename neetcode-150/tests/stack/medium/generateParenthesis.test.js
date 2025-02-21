const Solution = require('../../../src/problems/stack/medium/generateParenthesis');

describe('generateParenthesis', () => {
    let solution;

    beforeEach(() => {
        solution = new Solution();
    });

    test('should return ["()"] for n = 1', () => {
        const n = 1;
        const result = solution.generateParenthesis(n);
        expect(result).toEqual(["()"]);
    });

    test('should return ["((()))","(()())","(())()","()(())","()()()"] for n = 3', () => {
        const n = 3;
        const result = solution.generateParenthesis(n);
        const expected = ["((()))", "(()())", "(())()", "()(())", "()()()"];
        expect(result).toEqual(expect.arrayContaining(expected));
    });

    test('should return ["(((())))","((()()))","((())())","((()))()","(()(()))","(()()())","(()())()","(())(())","(())()()","()((()))","()(()())","()(())()","()()(())","()()()()"] for n = 4', () => {
        const n = 4;
        const result = solution.generateParenthesis(n);
        const expected = ["(((())))", "((()()))", "((())())", "((()))()", "(()(()))", "(()()())", "(()())()", "(())(())", "(())()()", "()((()))", "()(()())", "()(())()", "()()(())", "()()()()"];
        expect(result).toEqual(expect.arrayContaining(expected));
    });

    test('should return [""] for n = 0', () => {
        const n = 0;
        const result = solution.generateParenthesis(n);
        expect(result).toEqual([""]);
    });

    test('should return ["()()","(())"] for n = 2', () => {
        const n = 2;
        const result = solution.generateParenthesis(n);
        const expected = ["()()", "(())"];
        expect(result).toEqual(expect.arrayContaining(expected));
    });
});