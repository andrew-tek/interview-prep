const ListNode = require('../../../src/problems/LinkedList/ListNode');
const Solution = require('../../../src/problems/LinkedList/easy/mergeTwoLists');

describe('mergeTwoLists', () => {
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

    test('should merge [1, 2, 4] and [1, 3, 4] into [1, 1, 2, 3, 4, 4]', () => {
        const list1 = arrayToList([1, 2, 4]);
        const list2 = arrayToList([1, 3, 4]);
        const mergedHead = solution.mergeTwoLists(list1, list2);
        expect(listToArray(mergedHead)).toEqual([1, 1, 2, 3, 4, 4]);
    });

    test('should merge [] and [] into []', () => {
        const list1 = arrayToList([]);
        const list2 = arrayToList([]);
        const mergedHead = solution.mergeTwoLists(list1, list2);
        expect(listToArray(mergedHead)).toEqual([]);
    });

    test('should merge [] and [0] into [0]', () => {
        const list1 = arrayToList([]);
        const list2 = arrayToList([0]);
        const mergedHead = solution.mergeTwoLists(list1, list2);
        expect(listToArray(mergedHead)).toEqual([0]);
    });

    test('should merge [2] and [1] into [1, 2]', () => {
        const list1 = arrayToList([2]);
        const list2 = arrayToList([1]);
        const mergedHead = solution.mergeTwoLists(list1, list2);
        expect(listToArray(mergedHead)).toEqual([1, 2]);
    });

    test('should merge [5, 6, 7] and [1, 2, 3] into [1, 2, 3, 5, 6, 7]', () => {
        const list1 = arrayToList([5, 6, 7]);
        const list2 = arrayToList([1, 2, 3]);
        const mergedHead = solution.mergeTwoLists(list1, list2);
        expect(listToArray(mergedHead)).toEqual([1, 2, 3, 5, 6, 7]);
    });
});