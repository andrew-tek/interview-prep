const PrefixTree = require('../../../src/problems/Trie/medium/Trie');

describe('PrefixTree', () => {
    let trie;

    beforeEach(() => {
        trie = new PrefixTree();
    });

    test('should insert and search for a word', () => {
        trie.insert('apple');
        expect(trie.search('apple')).toBe(true); // returns true
        expect(trie.search('app')).toBe(false); // returns false
    });

    test('should check if a prefix exists', () => {
        trie.insert('apple');
        expect(trie.startsWith('app')).toBe(true); // returns true
        expect(trie.startsWith('apl')).toBe(false); // returns false
    });

    test('should handle multiple words', () => {
        trie.insert('apple');
        trie.insert('app');
        expect(trie.search('apple')).toBe(true); // returns true
        expect(trie.search('app')).toBe(true); // returns true
        expect(trie.startsWith('ap')).toBe(true); // returns true
        expect(trie.startsWith('appl')).toBe(true); // returns true
        expect(trie.startsWith('banana')).toBe(false); // returns false
    });

    test('should handle words with common prefixes', () => {
        trie.insert('apple');
        trie.insert('app');
        trie.insert('application');
        expect(trie.search('apple')).toBe(true); // returns true
        expect(trie.search('app')).toBe(true); // returns true
        expect(trie.search('application')).toBe(true); // returns true
        expect(trie.startsWith('appl')).toBe(true); // returns true
        expect(trie.startsWith('applic')).toBe(true); // returns true
        expect(trie.startsWith('banana')).toBe(false); // returns false
    });

    test('should return false for non-existent words and prefixes', () => {
        trie.insert('apple');
        expect(trie.search('banana')).toBe(false); // returns false
        expect(trie.startsWith('ban')).toBe(false); // returns false
    });
});