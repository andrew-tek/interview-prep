const ListNode = require('../../../src/problems/LinkedList/ListNode');
const Solution = require('../../../src/problems/LinkedList/easy/reverseList');

describe('reverseList', () => {
    let solution;

    beforeEach(() => {
        solution = new Solution();
    });

    function arrayToList(arr) {
        let dummy = new ListNode();
        let current = dummy;
        for (let val of arr) {
            current.next = new ListNode(val);
            current = current.next;
        }
        return dummy.next;
    }

    function listToArray(head) {
        let arr = [];
        while (head) {
            arr.push(head.val);
            head = head.next;
        }
        return arr;
    }

    test('should reverse the list [1, 2, 3, 4, 5]', () => {
        const head = arrayToList([1, 2, 3, 4, 5]);
        const reversedHead = solution.reverseList(head);
        expect(listToArray(reversedHead)).toEqual([5, 4, 3, 2, 1]);
    });

    test('should reverse the list [1, 2]', () => {
        const head = arrayToList([1, 2]);
        const reversedHead = solution.reverseList(head);
        expect(listToArray(reversedHead)).toEqual([2, 1]);
    });

    test('should handle an empty list', () => {
        const head = arrayToList([]);
        const reversedHead = solution.reverseList(head);
        expect(listToArray(reversedHead)).toEqual([]);
    });

    test('should handle a single element list', () => {
        const head = arrayToList([1]);
        const reversedHead = solution.reverseList(head);
        expect(listToArray(reversedHead)).toEqual([1]);
    });
});