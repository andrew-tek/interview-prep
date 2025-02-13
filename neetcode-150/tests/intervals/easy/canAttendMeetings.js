const Interval = require('../../../src/problems/intervals/Interval');
const Solution = require('../../../src/problems/intervals/easy/canAttendMeetings');

describe('canAttendMeetings', () => {
    let solution;

    beforeEach(() => {
        solution = new Solution();
    });

    test('should return true for non-overlapping intervals', () => {
        const intervals = [
            new Interval(0, 30),
            new Interval(35, 50),
            new Interval(60, 70)
        ];
        expect(solution.canAttendMeetings(intervals)).toBe(true);
    });

    test('should return false for overlapping intervals', () => {
        const intervals = [
            new Interval(0, 30),
            new Interval(25, 50),
            new Interval(60, 70)
        ];
        expect(solution.canAttendMeetings(intervals)).toBe(false);
    });

    test('should return true for an empty array', () => {
        const intervals = [];
        expect(solution.canAttendMeetings(intervals)).toBe(true);
    });

    test('should return true for a single interval', () => {
        const intervals = [
            new Interval(0, 30)
        ];
        expect(solution.canAttendMeetings(intervals)).toBe(true);
    });

    test('should return false for intervals with same start and end times', () => {
        const intervals = [
            new Interval(0, 30),
            new Interval(30, 60),
            new Interval(60, 90)
        ];
        expect(solution.canAttendMeetings(intervals)).toBe(true);
    });
});