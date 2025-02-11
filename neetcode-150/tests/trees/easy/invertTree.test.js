const TreeNode = require('../../../src/problems/trees/TreeNode');
const Solution = require('../../../src/problems/trees/easy/invertTree');

describe('invertTree', () => {
    let solution;

    beforeEach(() => {
        solution = new Solution();
    });

    function arrayToTree(arr) {
        if (!arr.length) return null;
        let root = new TreeNode(arr[0]);
        let queue = [root];
        let i = 1;
        while (i < arr.length) {
            let current = queue.shift();
            if (arr[i] !== null) {
                current.left = new TreeNode(arr[i]);
                queue.push(current.left);
            }
            i++;
            if (i < arr.length && arr[i] !== null) {
                current.right = new TreeNode(arr[i]);
                queue.push(current.right);
            }
            i++;
        }
        return root;
    }

    function treeToArray(root) {
        if (!root) return [];
        let result = [];
        let queue = [root];
        while (queue.length) {
            let current = queue.shift();
            if (current) {
                result.push(current.val);
                queue.push(current.left);
                queue.push(current.right);
            } else {
                result.push(null);
            }
        }
        while (result[result.length - 1] === null) {
            result.pop();
        }
        return result;
    }

    test('should invert the tree [4, 2, 7, 1, 3, 6, 9]', () => {
        const root = arrayToTree([4, 2, 7, 1, 3, 6, 9]);
        const invertedRoot = solution.invertTree(root);
        expect(treeToArray(invertedRoot)).toEqual([4, 7, 2, 9, 6, 3, 1]);
    });

    test('should invert the tree [2, 1, 3]', () => {
        const root = arrayToTree([2, 1, 3]);
        const invertedRoot = solution.invertTree(root);
        expect(treeToArray(invertedRoot)).toEqual([2, 3, 1]);
    });

    test('should handle an empty tree', () => {
        const root = arrayToTree([]);
        const invertedRoot = solution.invertTree(root);
        expect(treeToArray(invertedRoot)).toEqual([]);
    });

    test('should handle a single node tree', () => {
        const root = arrayToTree([1]);
        const invertedRoot = solution.invertTree(root);
        expect(treeToArray(invertedRoot)).toEqual([1]);
    });
});