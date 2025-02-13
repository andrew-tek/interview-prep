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
    diameterOfBinaryTree(root) {
        let count = [0];
        this.depthFirstSearch(root, count);
        return count[0];
    }

    /**
     * @param {TreeNode} root @param count
     * @return {number}
     */

    depthFirstSearch(root, count) {
        if (root == null) return 0;
        const left = this.depthFirstSearch(root.left, count);
        const right = this.depthFirstSearch(root.right, count);

        count[0] = Math.max(count[0], left + right);
        return 1 + Math.max(left, right);
    }
}

module.exports = Solution;