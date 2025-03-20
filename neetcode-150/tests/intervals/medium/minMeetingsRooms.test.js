const Solution = require('../../../src/problems/intervals/medium/minMeetingRooms');
const Interval = require('../../../src/problems/intervals/Interval');

describe('minMeetingRooms', () => {
    let solution;

    beforeEach(() => {
        solution = new Solution();
    });

    test('should return 2 for overlapping intervals', () => {
        const intervals = [
            new Interval(0, 30),
            new Interval(5, 10),
            new Interval(15, 20)
        ];
        const result = solution.minMeetingRooms(intervals);
        expect(result).toBe(2); // Two rooms are needed
    });

    test('should return 1 for non-overlapping intervals', () => {
        const intervals = [
            new Interval(0, 5),
            new Interval(10, 15),
            new Interval(20, 25)
        ];
        const result = solution.minMeetingRooms(intervals);
        expect(result).toBe(1); // Only one room is needed
    });

    test('should return 0 for an empty list of intervals', () => {
        const intervals = [];
        const result = solution.minMeetingRooms(intervals);
        expect(result).toBe(0); // No rooms are needed
    });

    test('should return 1 for a single interval', () => {
        const intervals = [new Interval(5, 10)];
        const result = solution.minMeetingRooms(intervals);
        expect(result).toBe(1); // Only one room is needed
    });

    test('should handle intervals with the same start and end times', () => {
        const intervals = [
            new Interval(1, 5),
            new Interval(1, 5),
            new Interval(1, 5)
        ];
        const result = solution.minMeetingRooms(intervals);
        expect(result).toBe(3); // Three rooms are needed
    });

    test('should handle intervals with touching boundaries', () => {
        const intervals = [
            new Interval(1, 2),
            new Interval(2, 3),
            new Interval(3, 4)
        ];
        const result = solution.minMeetingRooms(intervals);
        expect(result).toBe(1); // Only one room is needed
    });
});