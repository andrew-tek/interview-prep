const TreeNode = require('../TreeNode');
const { Queue } = require('@datastructures-js/queue');
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
     * @return {number[][]}
     */
    levelOrder(root) {
        let res = [];
        if (!root) return res;

        const q = new Queue();
        q.push(root);

        while(!q.isEmpty()){
            let level = [];

            for(let i = q.size(); i > 0; i--){
                let node = q.pop();
                if(node !== null){
                    level.push(node.val);
                    q.push(node.left);
                    q.push(node.right);
                }
            }
            if(level.length > 0){
                res.push(level);
            }
        }
        return res;
    }
}

module.exports = Solution;
