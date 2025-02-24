const Solution = require('../../../src/problems/LinkedList/medium/removeNthFromEnd');

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function arrayToList(arr) {
    if (arr.length === 0) return null;
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

function listToArray(head) {
    let arr = [];
    let current = head;
    while (current !== null) {
        arr.push(current.val);
        current = current.next;
    }
    return arr;
}

describe('removeNthFromEnd', () => {
    let solution;

    beforeEach(() => {
        solution = new Solution();
    });

    test('should remove 2nd node from end of list [1, 2, 3, 4, 5]', () => {
        const head = arrayToList([1, 2, 3, 4, 5]);
        const result = solution.removeNthFromEnd(head, 2);
        expect(listToArray(result)).toEqual([1, 2, 3, 5]);
    });

    test('should remove 1st node from end of list [1]', () => {
        const head = arrayToList([1]);
        const result = solution.removeNthFromEnd(head, 1);
        expect(listToArray(result)).toEqual([]);
    });

    test('should remove 1st node from end of list [1, 2]', () => {
        const head = arrayToList([1, 2]);
        const result = solution.removeNthFromEnd(head, 1);
        expect(listToArray(result)).toEqual([1]);
    });

    test('should remove 2nd node from end of list [1, 2]', () => {
        const head = arrayToList([1, 2]);
        const result = solution.removeNthFromEnd(head, 2);
        expect(listToArray(result)).toEqual([2]);
    });
});