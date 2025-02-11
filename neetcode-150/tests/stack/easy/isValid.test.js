const Solution = require('../../../src/problems/stack/easy/isValid');

describe('isValid', () => {
    let solution;

    beforeEach(() => {
        solution = new Solution();
    });

    test('should return true for "()"', () => {
        const s = "()";
        expect(solution.isValid(s)).toBe(true);
    });

    test('should return true for "()[]{}"', () => {
        const s = "()[]{}";
        expect(solution.isValid(s)).toBe(true);
    });

    test('should return false for "(]"', () => {
        const s = "(]";
        expect(solution.isValid(s)).toBe(false);
    });

    test('should return false for "([)]"', () => {
        const s = "([)]";
        expect(solution.isValid(s)).toBe(false);
    });

    test('should return true for "{[]}"', () => {
        const s = "{[]}";
        expect(solution.isValid(s)).toBe(true);
    });

    test('should return false for "["', () => {
        const s = "[";
        expect(solution.isValid(s)).toBe(false);
    });

    test('should return false for "]"', () => {
        const s = "]";
        expect(solution.isValid(s)).toBe(false);
    });

    test('should return true for an empty string', () => {
        const s = "";
        expect(solution.isValid(s)).toBe(true);
    });
});