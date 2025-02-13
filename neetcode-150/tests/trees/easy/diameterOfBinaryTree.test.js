const TreeNode = require('../../../src/problems/trees/TreeNode');
const Solution = require('../../../src/problems/trees/easy/diameterOfBinaryTree');

describe('diameterOfBinaryTree', () => {
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

    test('should return 3 for tree [1, 2, 3, 4, 5]', () => {
        const root = arrayToTree([1, 2, 3, 4, 5]);
        expect(solution.diameterOfBinaryTree(root)).toBe(3);
    });

    test('should return 1 for tree [1, 2]', () => {
        const root = arrayToTree([1, 2]);
        expect(solution.diameterOfBinaryTree(root)).toBe(1);
    });

    test('should return 0 for an empty tree', () => {
        const root = arrayToTree([]);
        expect(solution.diameterOfBinaryTree(root)).toBe(0);
    });

    test('should return 0 for a single node tree', () => {
        const root = arrayToTree([1]);
        expect(solution.diameterOfBinaryTree(root)).toBe(0);
    });

    test('should return 4 for tree [1, 2, 3, 4, 5, null, null, 6, 7]', () => {
        const root = arrayToTree([1, 2, 3, 4, 5, null, null, 6, 7]);
        expect(solution.diameterOfBinaryTree(root)).toBe(4);
    });
});