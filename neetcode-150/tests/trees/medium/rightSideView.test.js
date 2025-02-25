const Solution = require('../../../src/problems/trees/medium/rightSideView');

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

describe('rightSideView', () => {
    let solution;

    beforeEach(() => {
        solution = new Solution();
    });

    test('should return [1, 3, 4] for tree [1, 2, 3, null, 5, null, 4]', () => {
        const root = arrayToTree([1, 2, 3, null, 5, null, 4]);
        const result = solution.rightSideView(root);
        expect(result).toEqual([1, 3, 4]);
    });

    test('should return [1, 3, 4] for tree [1, 2, 3, 4]', () => {
        const root = arrayToTree([1, 2, 3, 4]);
        const result = solution.rightSideView(root);
        expect(result).toEqual([1, 3, 4]);
    });

    test('should return [1, 2] for tree [1, 2]', () => {
        const root = arrayToTree([1, 2]);
        const result = solution.rightSideView(root);
        expect(result).toEqual([1, 2]);
    });

    test('should return [1] for tree [1]', () => {
        const root = arrayToTree([1]);
        const result = solution.rightSideView(root);
        expect(result).toEqual([1]);
    });

    test('should return [] for an empty tree', () => {
        const root = arrayToTree([]);
        const result = solution.rightSideView(root);
        expect(result).toEqual([]);
    });
});