const Solution = require('../../../src/problems/trees/medium/levelOrder');

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

describe('levelOrder', () => {
    let solution;

    beforeEach(() => {
        solution = new Solution();
    });

    test('should return [[3], [9, 20], [15, 7]] for tree [3, 9, 20, null, null, 15, 7]', () => {
        const root = arrayToTree([3, 9, 20, null, null, 15, 7]);
        const result = solution.levelOrder(root);
        expect(result).toEqual([[3], [9, 20], [15, 7]]);
    });

    test('should return [[1]] for tree [1]', () => {
        const root = arrayToTree([1]);
        const result = solution.levelOrder(root);
        expect(result).toEqual([[1]]);
    });

    test('should return [] for an empty tree', () => {
        const root = arrayToTree([]);
        const result = solution.levelOrder(root);
        expect(result).toEqual([]);
    });

    test('should return [[1], [2, 3], [4, 5]] for tree [1, 2, 3, 4, 5]', () => {
        const root = arrayToTree([1, 2, 3, 4, 5]);
        const result = solution.levelOrder(root);
        expect(result).toEqual([[1], [2, 3], [4, 5]]);
    });
});