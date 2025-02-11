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
     * @return {number}
     */
    maxDepth(root) {
        let depth = 0;
        if(root === null) return depth;
        return ( 1 + Math.max(this.maxDepth(root.left), this.maxDepth(root.right)));
    }
}

module.exports = Solution;