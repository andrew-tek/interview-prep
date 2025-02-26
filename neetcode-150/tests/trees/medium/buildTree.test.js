const Solution = require('../../../src/problems/trees/medium/buildTree');

class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function treeToArray(root) {
    if (!root) return [];
    const result = [];
    const queue = [root];
    while (queue.length > 0) {
        const node = queue.shift();
        if (node) {
            result.push(node.val);
            queue.push(node.left);
            queue.push(node.right);
        } else {
            result.push(null);
        }
    }
    // Remove trailing nulls
    while (result[result.length - 1] === null) {
        result.pop();
    }
    return result;
}

describe('buildTree', () => {
    let solution;

    beforeEach(() => {
        solution = new Solution();
    });

    test('should build tree from preorder [3, 9, 20, 15, 7] and inorder [9, 3, 15, 20, 7]', () => {
        const preorder = [3, 9, 20, 15, 7];
        const inorder = [9, 3, 15, 20, 7];
        const result = solution.buildTree(preorder, inorder);
        expect(treeToArray(result)).toEqual([3, 9, 20, null, null, 15, 7]);
    });

    test('should build tree from preorder [1, 2] and inorder [2, 1]', () => {
        const preorder = [1, 2];
        const inorder = [2, 1];
        const result = solution.buildTree(preorder, inorder);
        expect(treeToArray(result)).toEqual([1, 2]);
    });

    test('should build tree from preorder [1, 2, 3] and inorder [3, 2, 1]', () => {
        const preorder = [1, 2, 3];
        const inorder = [3, 2, 1];
        const result = solution.buildTree(preorder, inorder);
        expect(treeToArray(result)).toEqual([1, 2, null, 3]);
    });

    test('should build tree from preorder [1] and inorder [1]', () => {
        const preorder = [1];
        const inorder = [1];
        const result = solution.buildTree(preorder, inorder);
        expect(treeToArray(result)).toEqual([1]);
    });

    test('should return null for empty preorder and inorder', () => {
        const preorder = [];
        const inorder = [];
        const result = solution.buildTree(preorder, inorder);
        expect(result).toBeNull();
    });
});