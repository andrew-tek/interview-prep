const Solution = require('../../../src/problems/BitManipulation/easy/reverseBits');

describe('reverseBits', () => {
    let solution;

    beforeEach(() => {
        solution = new Solution();
    });

    test('should return 964176192 for n = 43261596 (binary 00000010100101000001111010011100)', () => {
        const n = 43261596; // binary representation: 00000010100101000001111010011100
        expect(solution.reverseBits(n)).toBe(964176192); // binary representation: 00111001011110000010100101000000
    });

    test('should return 3221225471 for n = 4294967293 (binary 11111111111111111111111111111101)', () => {
        const n = 4294967293; // binary representation: 11111111111111111111111111111101
        expect(solution.reverseBits(n)).toBe(3221225471); // binary representation: 10111111111111111111111111111111
    });

    test('should return 0 for n = 0 (binary 00000000000000000000000000000000)', () => {
        const n = 0; // binary representation: 00000000000000000000000000000000
        expect(solution.reverseBits(n)).toBe(0); // binary representation: 00000000000000000000000000000000
    });

    test('should return 2147483648 for n = 1 (binary 00000000000000000000000000000001)', () => {
        const n = 1; // binary representation: 00000000000000000000000000000001
        expect(solution.reverseBits(n)).toBe(2147483648); // binary representation: 10000000000000000000000000000000
    });

    test('should return 1 for n = 2147483648 (binary 10000000000000000000000000000000)', () => {
        const n = 2147483648; // binary representation: 10000000000000000000000000000000
        expect(solution.reverseBits(n)).toBe(1); // binary representation: 00000000000000000000000000000001
    });
});