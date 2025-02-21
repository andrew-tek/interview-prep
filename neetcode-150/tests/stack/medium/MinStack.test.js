const MinStack = require('../../../src/problems/stack/medium/MinStack');

describe('MinStack', () => {
    let minStack;

    beforeEach(() => {
        minStack = new MinStack();
    });

    test('should push elements and get the minimum value', () => {
        minStack.push(-2);
        minStack.push(0);
        minStack.push(-3);
        expect(minStack.getMin()).toBe(-3); // return -3
        minStack.pop();
        expect(minStack.top()).toBe(0);    // return 0
        expect(minStack.getMin()).toBe(-2); // return -2
    });

    test('should handle multiple push and pop operations', () => {
        minStack.push(1);
        minStack.push(2);
        minStack.push(-1);
        minStack.push(-2);
        expect(minStack.getMin()).toBe(-2); // return -2
        minStack.pop();
        expect(minStack.getMin()).toBe(-1); // return -1
        minStack.pop();
        expect(minStack.getMin()).toBe(1);  // return 1
        minStack.pop();
        expect(minStack.getMin()).toBe(1);  // return 1
    });

    test('should handle edge case with duplicate elements', () => {
        minStack.push(2);
        minStack.push(2);
        minStack.push(1);
        expect(minStack.getMin()).toBe(1); // return 1
        minStack.pop();
        expect(minStack.getMin()).toBe(2); // return 2
        minStack.pop();
        expect(minStack.getMin()).toBe(2); // return 2
    });
});