const TreeNode = require('../../../src/problems/trees/TreeNode');
const Solution = require('../../../src/problems/trees/easy/isBalanced');

describe('isBalanced', () => {
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

    test('should return true for balanced tree [3, 9, 20, null, null, 15, 7]', () => {
        const root = arrayToTree([3, 9, 20, null, null, 15, 7]);
        expect(solution.isBalanced(root)).toBe(true);
    });

    test('should return false for unbalanced tree [1, 2, 2, 3, 3, null, null, 4, 4]', () => {
        const root = arrayToTree([1, 2, 2, 3, 3, null, null, 4, 4]);
        expect(solution.isBalanced(root)).toBe(false);
    });

    test('should return true for an empty tree', () => {
        const root = arrayToTree([]);
        expect(solution.isBalanced(root)).toBe(true);
    });

    test('should return true for a single node tree', () => {
        const root = arrayToTree([1]);
        expect(solution.isBalanced(root)).toBe(true);
    });

});