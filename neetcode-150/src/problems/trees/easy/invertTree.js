const TreeNode = require('../TreeNode');

class Solution {
    /**
     * @param {TreeNode} root
     * @return {TreeNode}
     */
    invertTree(root) {
        if (root == null) return null;
        let temp = root.left;
        root.left = root.right;
        root.right = temp;
        this.invertTree(root.left);
        this.invertTree(root.right);
        return root;
    }
}

module.exports = Solution;