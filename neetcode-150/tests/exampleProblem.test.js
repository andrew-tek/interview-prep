const { exampleProblemFunction } = require('../src/problems/exampleProblem');

describe('Example Problem', () => {
    test('should return expected output for given input', () => {
        const input = 1;
        const expectedOutput = 2;
        expect(exampleProblemFunction(input)).toEqual(expectedOutput);
    });

    // Add more test cases as needed
});