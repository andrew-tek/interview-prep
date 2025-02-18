const Solution = require('../../../src/problems/arrays/medium/encodeDecode');

describe('encodeDecode', () => {
    let solution;

    beforeEach(() => {
        solution = new Solution();
    });

    test('should encode and decode ["hello", "world"] correctly', () => {
        const strs = ["hello", "world"];
        const encoded = solution.encode(strs);
        const decoded = solution.decode(encoded);
        expect(decoded).toEqual(strs);
    });

    test('should encode and decode [""] correctly', () => {
        const strs = [""];
        const encoded = solution.encode(strs);
        const decoded = solution.decode(encoded);
        expect(decoded).toEqual(strs);
    });

    test('should encode and decode ["a", "b", "c"] correctly', () => {
        const strs = ["a", "b", "c"];
        const encoded = solution.encode(strs);
        const decoded = solution.decode(encoded);
        expect(decoded).toEqual(strs);
    });

    test('should encode and decode ["abc", "def", "ghi"] correctly', () => {
        const strs = ["abc", "def", "ghi"];
        const encoded = solution.encode(strs);
        const decoded = solution.decode(encoded);
        expect(decoded).toEqual(strs);
    });

    test('should encode and decode ["longer", "strings", "with", "spaces"] correctly', () => {
        const strs = ["longer", "strings", "with", "spaces"];
        const encoded = solution.encode(strs);
        const decoded = solution.decode(encoded);
        expect(decoded).toEqual(strs);
    });
});