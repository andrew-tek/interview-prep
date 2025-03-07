class Node {
    constructor(val = 0, neighbors = []) {
        this.val = val;
        this.neighbors = neighbors;
    }
}

const Solution = require('../../../src/problems/Graphs/medium/cloneGraph');

describe('cloneGraph', () => {
    let solution;

    beforeEach(() => {
        solution = new Solution();
    });

    test('should clone a graph with a single node', () => {
        const node = new Node(1);
        const clonedNode = solution.cloneGraph(node);
        expect(clonedNode).not.toBe(node);
        expect(clonedNode.val).toBe(1);
        expect(clonedNode.neighbors).toEqual([]);
    });

    test('should clone a graph with multiple nodes', () => {
        const node1 = new Node(1);
        const node2 = new Node(2);
        const node3 = new Node(3);
        const node4 = new Node(4);

        node1.neighbors.push(node2, node4);
        node2.neighbors.push(node1, node3);
        node3.neighbors.push(node2, node4);
        node4.neighbors.push(node1, node3);

        const clonedNode1 = solution.cloneGraph(node1);

        expect(clonedNode1).not.toBe(node1);
        expect(clonedNode1.val).toBe(1);
        expect(clonedNode1.neighbors.length).toBe(2);

        const clonedNode2 = clonedNode1.neighbors.find(n => n.val === 2);
        const clonedNode4 = clonedNode1.neighbors.find(n => n.val === 4);

        expect(clonedNode2).not.toBe(node2);
        expect(clonedNode2.val).toBe(2);
        expect(clonedNode2.neighbors.length).toBe(2);

        expect(clonedNode4).not.toBe(node4);
        expect(clonedNode4.val).toBe(4);
        expect(clonedNode4.neighbors.length).toBe(2);
    });

    test('should handle null input', () => {
        const clonedNode = solution.cloneGraph(null);
        expect(clonedNode).toBeNull();
    });

    test('should clone a graph with a single node and self-loop', () => {
        const node = new Node(1);
        node.neighbors.push(node);

        const clonedNode = solution.cloneGraph(node);
        expect(clonedNode).not.toBe(node);
        expect(clonedNode.val).toBe(1);
        expect(clonedNode.neighbors.length).toBe(1);
        expect(clonedNode.neighbors[0]).toBe(clonedNode);
    });
});