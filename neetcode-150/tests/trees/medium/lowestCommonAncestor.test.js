const Solution = require('../../../src/problems/trees/medium/lowestCommonAncestor');

class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function insertIntoBST(root, val) {
    if (root === null) {
        return new TreeNode(val);
    }
    if (val < root.val) {
        root.left = insertIntoBST(root.left, val);
    } else {
        root.right = insertIntoBST(root.right, val);
    }
    return root;
}

function arrayToBST(arr) {
    let root = null;
    for (let val of arr) {
        root = insertIntoBST(root, val);
    }
    return root;
}

describe('lowestCommonAncestor', () => {
    let solution;

    beforeEach(() => {
        solution = new Solution();
    });

    test('should return the lowest common ancestor of nodes 2 and 8 in the BST [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]', () => {
        const root = arrayToBST([6, 2, 8, 0, 4, 7, 9, 3, 5]);
        const p = new TreeNode(2);
        const q = new TreeNode(8);
        const result = solution.lowestCommonAncestor(root, p, q);
        expect(result.val).toBe(6);
    });

    test('should return the lowest common ancestor of nodes 2 and 4 in the BST [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]', () => {
        const root = arrayToBST([6, 2, 8, 0, 4, 7, 9, 3, 5]);
        const p = new TreeNode(2);
        const q = new TreeNode(4);
        const result = solution.lowestCommonAncestor(root, p, q);
        expect(result.val).toBe(2);
    });

    test('should return the lowest common ancestor of nodes 3 and 5 in the BST [6, 2, 8, 0, 4, 7, 9, 3, 5]', () => {
        const root = arrayToBST([6, 2, 8, 0, 4, 7, 9, 3, 5]);
        const p = new TreeNode(3);
        const q = new TreeNode(5);
        const result = solution.lowestCommonAncestor(root, p, q);
        expect(result.val).toBe(4);
    });

    test('should return the lowest common ancestor of nodes 0 and 5 in the BST [6, 2, 8, 0, 4, 7, 9, 3, 5]', () => {
        const root = arrayToBST([6, 2, 8, 0, 4, 7, 9, 3, 5]);
        const p = new TreeNode(0);
        const q = new TreeNode(5);
        const result = solution.lowestCommonAncestor(root, p, q);
        expect(result.val).toBe(2);
    });

    test('should return the lowest common ancestor of nodes 7 and 9 in the BST [6, 2, 8, 0, 4, 7, 9, 3, 5]', () => {
        const root = arrayToBST([6, 2, 8, 0, 4, 7, 9, 3, 5]);
        const p = new TreeNode(7);
        const q = new TreeNode(9);
        const result = solution.lowestCommonAncestor(root, p, q);
        expect(result.val).toBe(8);
    });
});