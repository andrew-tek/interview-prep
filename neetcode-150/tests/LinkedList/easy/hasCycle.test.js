const ListNode = require('../../../src/problems/LinkedList/ListNode');
const Solution = require('../../../src/problems/LinkedList/easy/hasCycle');

describe('hasCycle', () => {
    let solution;

    beforeEach(() => {
        solution = new Solution();
    });

    function arrayToList(arr, pos) {
        let dummy = new ListNode();
        let current = dummy;
        let cycleNode = null;
        for (let i = 0; i < arr.length; i++) {
            current.next = new ListNode(arr[i]);
            current = current.next;
            if (i === pos) {
                cycleNode = current;
            }
        }
        if (cycleNode) {
            current.next = cycleNode;
        }
        return dummy.next;
    }

    test('should return true for list with cycle at position 1', () => {
        const head = arrayToList([3, 2, 0, -4], 1);
        expect(solution.hasCycle(head)).toBe(true);
    });

    test('should return true for list with cycle at position 0', () => {
        const head = arrayToList([1, 2], 0);
        expect(solution.hasCycle(head)).toBe(true);
    });

    test('should return false for list with no cycle', () => {
        const head = arrayToList([1, 2, 3, 4], -1);
        expect(solution.hasCycle(head)).toBe(false);
    });

    test('should return false for an empty list', () => {
        const head = arrayToList([], -1);
        expect(solution.hasCycle(head)).toBe(false);
    });

    test('should return false for single node list with no cycle', () => {
        const head = arrayToList([1], -1);
        expect(solution.hasCycle(head)).toBe(false);
    });

    test('should return true for single node list with cycle', () => {
        const head = arrayToList([1], 0);
        expect(solution.hasCycle(head)).toBe(true);
    });
});