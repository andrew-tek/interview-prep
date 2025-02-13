/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root) {
        return this.depthFirstSearch(root)[0];
    }

    /**
     * @param {TreeNode} root
     * @return {number}
     */

    depthFirstSearch(root){
        if( root == null) return [true, 0];
        let left = this.depthFirstSearch(root.left)
        let right = this.depthFirstSearch(root.right);
        let balanced = (left[0] && right[0] && Math.abs(left[1] - right[1]) <= 1);
        return [balanced, 1 + Math.max(left[1], right[1])];

    }
}

module.exports = Solution;