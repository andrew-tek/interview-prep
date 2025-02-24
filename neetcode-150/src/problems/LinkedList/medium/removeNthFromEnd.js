const ListNode = require('../ListNode');
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let dummy = new ListNode(0, head);
        let left = dummy, right = head;
        while(n > 0){
            right = right.next;
            n--;
        }
        while (right !== null) {
            left = left.next;
            right = right.next;
        }

        left.next = left.next.next;
        return dummy.next;


    }
}

module.exports = Solution;