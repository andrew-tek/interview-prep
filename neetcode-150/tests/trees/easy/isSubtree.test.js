const TreeNode = require('../../../src/problems/trees/TreeNode');
const Solution = require('../../../src/problems/trees/easy/isSubtree');

describe('isSubtree', () => {
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

    test('should return true for subtree [4, 1, 2] in tree [3, 4, 5, 1, 2]', () => {
        const root = arrayToTree([3, 4, 5, 1, 2]);
        const subRoot = arrayToTree([4, 1, 2]);
        expect(solution.isSubtree(root, subRoot)).toBe(true);
    });

    test('should return false for subtree [4, 1, 2] in tree [3, 4, 5, 1, null, 2]', () => {
        const root = arrayToTree([3, 4, 5, 1, null, 2]);
        const subRoot = arrayToTree([4, 1, 2]);
        expect(solution.isSubtree(root, subRoot)).toBe(false);
    });

    test('should return true for empty subtree in any tree', () => {
        const root = arrayToTree([1, 2, 3]);
        const subRoot = arrayToTree([]);
        expect(solution.isSubtree(root, subRoot)).toBe(true);
    });

    test('should return false for non-empty subtree in empty tree', () => {
        const root = arrayToTree([]);
        const subRoot = arrayToTree([1]);
        expect(solution.isSubtree(root, subRoot)).toBe(false);
    });

    test('should return true for identical trees [1, 2, 3]', () => {
        const root = arrayToTree([1, 2, 3]);
        const subRoot = arrayToTree([1, 2, 3]);
        expect(solution.isSubtree(root, subRoot)).toBe(true);
    });
});