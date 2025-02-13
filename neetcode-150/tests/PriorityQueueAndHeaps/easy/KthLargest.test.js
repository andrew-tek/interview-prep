const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
const KthLargest = require('../../../src/problems/PriorityQueueAndHeaps/easy/KthLargest');

describe('KthLargest', () => {
    test('should return the kth largest element', () => {
        const kthLargest = new KthLargest(3, [4, 5, 8, 2]);
        expect(kthLargest.add(3)).toBe(4); // [4, 5, 8]
        expect(kthLargest.add(5)).toBe(5); // [5, 5, 8]
        expect(kthLargest.add(10)).toBe(5); // [5, 8, 10]
        expect(kthLargest.add(9)).toBe(8); // [8, 9, 10]
        expect(kthLargest.add(4)).toBe(8); // [8, 9, 10]
    });

    test('should handle empty initial array', () => {
        const kthLargest = new KthLargest(1, []);
        expect(kthLargest.add(1)).toBe(1);
        expect(kthLargest.add(-1)).toBe(1);
        expect(kthLargest.add(2)).toBe(2);
        expect(kthLargest.add(-4)).toBe(2);
        expect(kthLargest.add(3)).toBe(3);
    });

    test('should handle k larger than initial array length', () => {
        const kthLargest = new KthLargest(5, [2, 3]);
        expect(kthLargest.add(4)).toBe(2);
        expect(kthLargest.add(5)).toBe(2);
        expect(kthLargest.add(10)).toBe(2);
        expect(kthLargest.add(9)).toBe(3);
        expect(kthLargest.add(4)).toBe(4);
    });

    test('should handle k equal to initial array length', () => {
        const kthLargest = new KthLargest(4, [4, 5, 8, 2]);
        expect(kthLargest.add(3)).toBe(3);
        expect(kthLargest.add(5)).toBe(4);
        expect(kthLargest.add(10)).toBe(5);
        expect(kthLargest.add(9)).toBe(5);
        expect(kthLargest.add(4)).toBe(5);
    });
});