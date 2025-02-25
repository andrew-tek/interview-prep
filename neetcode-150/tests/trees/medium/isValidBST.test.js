const Solution = require('../../../src/problems/trees/medium/isValidBST');

class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function insertIntoTree(arr, i) {
    if (i >= arr.length || arr[i] === null) {
        return null;
    }
    const root = new TreeNode(arr[i]);
    root.left = insertIntoTree(arr, 2 * i + 1);
    root.right = insertIntoTree(arr, 2 * i + 2);
    return root;
}

function arrayToTree(arr) {
    return insertIntoTree(arr, 0);
}

describe('isValidBST', () => {
    let solution;

    beforeEach(() => {
        solution = new Solution();
    });

    test('should return true for a valid BST [2, 1, 3]', () => {
        const root = arrayToTree([2, 1, 3]);
        const result = solution.isValidBST(root);
        expect(result).toBe(true);
    });

    test('should return false for an invalid BST [5, 1, 4, null, null, 3, 6]', () => {
        const root = arrayToTree([5, 1, 4, null, null, 3, 6]);
        const result = solution.isValidBST(root);
        expect(result).toBe(false);
    });

    test('should return false for an invalid BST [10, 5, 15, null, null, 6, 20]', () => {
        const root = arrayToTree([10, 5, 15, null, null, 6, 20]);
        const result = solution.isValidBST(root);
        expect(result).toBe(false);
    });

    test('should return true for a valid BST [1]', () => {
        const root = arrayToTree([1]);
        const result = solution.isValidBST(root);
        expect(result).toBe(true);
    });

    test('should return true for an empty tree', () => {
        const root = arrayToTree([]);
        const result = solution.isValidBST(root);
        expect(result).toBe(true);
    });
});