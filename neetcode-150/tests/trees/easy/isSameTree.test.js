const TreeNode = require('../../../src/problems/trees/TreeNode');
const Solution = require('../../../src/problems/trees/easy/isSameTree');

describe('isSameTree', () => {
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

    test('should return true for same trees [1, 2, 3] and [1, 2, 3]', () => {
        const p = arrayToTree([1, 2, 3]);
        const q = arrayToTree([1, 2, 3]);
        expect(solution.isSameTree(p, q)).toBe(true);
    });

    test('should return false for different trees [1, 2] and [1, null, 2]', () => {
        const p = arrayToTree([1, 2]);
        const q = arrayToTree([1, null, 2]);
        expect(solution.isSameTree(p, q)).toBe(false);
    });

    test('should return false for different trees [1, 2, 1] and [1, 1, 2]', () => {
        const p = arrayToTree([1, 2, 1]);
        const q = arrayToTree([1, 1, 2]);
        expect(solution.isSameTree(p, q)).toBe(false);
    });

    test('should return true for empty trees', () => {
        const p = arrayToTree([]);
        const q = arrayToTree([]);
        expect(solution.isSameTree(p, q)).toBe(true);
    });

    test('should return true for single node trees with same value', () => {
        const p = arrayToTree([1]);
        const q = arrayToTree([1]);
        expect(solution.isSameTree(p, q)).toBe(true);
    });

    test('should return false for single node trees with different values', () => {
        const p = arrayToTree([1]);
        const q = arrayToTree([2]);
        expect(solution.isSameTree(p, q)).toBe(false);
    });
});