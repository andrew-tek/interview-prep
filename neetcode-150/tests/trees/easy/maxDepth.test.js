const TreeNode = require('../../../src/problems/trees/TreeNode');
const Solution = require('../../../src/problems/trees/easy/maxDepth');

describe('maxDepth', () => {
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

    test('should return 3 for tree [3, 9, 20, null, null, 15, 7]', () => {
        const root = arrayToTree([3, 9, 20, null, null, 15, 7]);
        expect(solution.maxDepth(root)).toBe(3);
    });

    test('should return 2 for tree [1, null, 2]', () => {
        const root = arrayToTree([1, null, 2]);
        expect(solution.maxDepth(root)).toBe(2);
    });

    test('should return 0 for an empty tree', () => {
        const root = arrayToTree([]);
        expect(solution.maxDepth(root)).toBe(0);
    });

    test('should return 1 for a single node tree', () => {
        const root = arrayToTree([1]);
        expect(solution.maxDepth(root)).toBe(1);
    });

    test('should return 3 for tree [1, 2, 3, 4, null, null, 5]', () => {
        const root = arrayToTree([1, 2, 3, 4, null, null, 5]);
        expect(solution.maxDepth(root)).toBe(3);
    });
});