const Solution = require('../../../src/problems/1D-DynamicProgramming/medium/numDecodings');

describe('numDecodings', () => {
    let solution;

    beforeEach(() => {
        solution = new Solution();
    });

    test('should return 2 for input "12"', () => {
        const s = "12";
        const result = solution.numDecodings(s);
        expect(result).toBe(2); // "AB" (1 2) or "L" (12)
    });

    test('should return 3 for input "226"', () => {
        const s = "226";
        const result = solution.numDecodings(s);
        expect(result).toBe(3); // "BZ" (2 26), "VF" (22 6), "BBF" (2 2 6)
    });

    test('should return 0 for input "0"', () => {
        const s = "0";
        const result = solution.numDecodings(s);
        expect(result).toBe(0); // No valid decoding
    });

    test('should return 0 for input "06"', () => {
        const s = "06";
        const result = solution.numDecodings(s);
        expect(result).toBe(0); // No valid decoding
    });

    test('should return 1 for input "10"', () => {
        const s = "10";
        const result = solution.numDecodings(s);
        expect(result).toBe(1); // "J" (10)
    });

    test('should return 1 for input "27"', () => {
        const s = "27";
        const result = solution.numDecodings(s);
        expect(result).toBe(1); // "BG" (2 7)
    });

    test('should return 5 for input "11106"', () => {
        const s = "11106";
        const result = solution.numDecodings(s);
        expect(result).toBe(2); // "AAJF" (1 1 10 6), "KJF" (11 10 6)
    });

    test('should return 3 for input "1234"', () => {
        const s = "1234";
        const result = solution.numDecodings(s);
        expect(result).toBe(3); // "ABCD" (1 2 3 4), "LCD" (12 3 4), "AWD" (1 23 4)
    });
});