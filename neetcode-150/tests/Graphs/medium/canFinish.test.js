const Solution = require('../../../src/problems/Graphs/medium/canFinish');

describe('canFinish', () => {
    let solution;

    beforeEach(() => {
        solution = new Solution();
    });

    test('should return true for no prerequisites', () => {
        const numCourses = 2;
        const prerequisites = [];
        const result = solution.canFinish(numCourses, prerequisites);
        expect(result).toBe(true);
    });

    test('should return true for valid course schedule', () => {
        const numCourses = 2;
        const prerequisites = [[1, 0]];
        const result = solution.canFinish(numCourses, prerequisites);
        expect(result).toBe(true);
    });

    test('should return false for invalid course schedule with cycle', () => {
        const numCourses = 2;
        const prerequisites = [[1, 0], [0, 1]];
        const result = solution.canFinish(numCourses, prerequisites);
        expect(result).toBe(false);
    });

    test('should return true for complex valid course schedule', () => {
        const numCourses = 4;
        const prerequisites = [[1, 0], [2, 1], [3, 2]];
        const result = solution.canFinish(numCourses, prerequisites);
        expect(result).toBe(true);
    });

    test('should return false for complex invalid course schedule with cycle', () => {
        const numCourses = 4;
        const prerequisites = [[1, 0], [2, 1], [3, 2], [1, 3]];
        const result = solution.canFinish(numCourses, prerequisites);
        expect(result).toBe(false);
    });

    test('should return true for single course with no prerequisites', () => {
        const numCourses = 1;
        const prerequisites = [];
        const result = solution.canFinish(numCourses, prerequisites);
        expect(result).toBe(true);
    });

    test('should return true for multiple courses with no prerequisites', () => {
        const numCourses = 5;
        const prerequisites = [];
        const result = solution.canFinish(numCourses, prerequisites);
        expect(result).toBe(true);
    });
});