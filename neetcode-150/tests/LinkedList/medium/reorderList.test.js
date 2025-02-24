const Solution = require('../../../src/problems/LinkedList/medium/reorderList');

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

describe('reorderList', () => {
    let solution;

    beforeEach(() => {
        solution = new Solution();
    });

    test('should reorder list [1, 2, 3, 4] to [1, 4, 2, 3]', () => {
        const head = arrayToList([1, 2, 3, 4]);
        solution.reorderList(head);
        const result = listToArray(head);
        expect(result).toEqual([1, 4, 2, 3]);
    });

    test('should reorder list [1, 2, 3, 4, 5] to [1, 5, 2, 4, 3]', () => {
        const head = arrayToList([1, 2, 3, 4, 5]);
        solution.reorderList(head);
        const result = listToArray(head);
        expect(result).toEqual([1, 5, 2, 4, 3]);
    });

    test('should reorder list [1, 2] to [1, 2]', () => {
        const head = arrayToList([1, 2]);
        solution.reorderList(head);
        const result = listToArray(head);
        expect(result).toEqual([1, 2]);
    });

    test('should reorder list [1] to [1]', () => {
        const head = arrayToList([1]);
        solution.reorderList(head);
        const result = listToArray(head);
        expect(result).toEqual([1]);
    });
});