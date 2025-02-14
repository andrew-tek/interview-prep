const Solution = require('../../../src/problems/BitManipulation/easy/hammingWeight');

describe('hammingWeight', () => {
    let solution;

    beforeEach(() => {
        solution = new Solution();
    });

    test('should return 3 for n = 11 (binary 1011)', () => {
        const n = 11; // binary representation: 1011
        expect(solution.hammingWeight(n)).toBe(3);
    });

    test('should return 1 for n = 128 (binary 10000000)', () => {
        const n = 128; // binary representation: 10000000
        expect(solution.hammingWeight(n)).toBe(1);
    });

    test('should return 31 for n = 2147483647 (binary 1111111111111111111111111111111)', () => {
        const n = 2147483647; // binary representation: 1111111111111111111111111111111
        expect(solution.hammingWeight(n)).toBe(31);
    });

    test('should return 0 for n = 0 (binary 0)', () => {
        const n = 0; // binary representation: 0
        expect(solution.hammingWeight(n)).toBe(0);
    });

    test('should return 2 for n = 3 (binary 11)', () => {
        const n = 3; // binary representation: 11
        expect(solution.hammingWeight(n)).toBe(2);
    });
});