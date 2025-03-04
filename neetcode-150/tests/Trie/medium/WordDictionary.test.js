const WordDictionary = require('../../../src/problems/Trie/medium/WordDictionary');

describe('WordDictionary', () => {
    let wordDictionary;

    beforeEach(() => {
        wordDictionary = new WordDictionary();
    });

    test('should add and search for a word', () => {
        wordDictionary.addWord('bad');
        wordDictionary.addWord('dad');
        wordDictionary.addWord('mad');
        expect(wordDictionary.search('pad')).toBe(false); // returns false
        expect(wordDictionary.search('bad')).toBe(true); // returns true
        expect(wordDictionary.search('.ad')).toBe(true); // returns true
        expect(wordDictionary.search('b..')).toBe(true); // returns true
    });

    test('should handle words with common prefixes', () => {
        wordDictionary.addWord('apple');
        wordDictionary.addWord('app');
        wordDictionary.addWord('application');
        expect(wordDictionary.search('apple')).toBe(true); // returns true
        expect(wordDictionary.search('app')).toBe(true); // returns true
        expect(wordDictionary.search('application')).toBe(true); // returns true
        expect(wordDictionary.search('appl')).toBe(false); // returns false
        expect(wordDictionary.search('appl.')).toBe(true); // returns true
        expect(wordDictionary.search('appl..')).toBe(false); // returns false
    });

    test('should handle words with dots', () => {
        wordDictionary.addWord('a');
        wordDictionary.addWord('ab');
        expect(wordDictionary.search('a')).toBe(true); // returns true
        expect(wordDictionary.search('a.')).toBe(true); // returns true
        expect(wordDictionary.search('ab')).toBe(true); // returns true
        expect(wordDictionary.search('.')).toBe(true); // returns true
        expect(wordDictionary.search('.b')).toBe(true); // returns true
        expect(wordDictionary.search('..')).toBe(true); // returns true
        expect(wordDictionary.search('...')).toBe(false); // returns false
    });

    test('should return false for non-existent words', () => {
        wordDictionary.addWord('hello');
        expect(wordDictionary.search('hell')).toBe(false); // returns false
        expect(wordDictionary.search('helloo')).toBe(false); // returns false
        expect(wordDictionary.search('hell.')).toBe(true); // returns true
        expect(wordDictionary.search('he.lo')).toBe(true); // returns true
        expect(wordDictionary.search('he..o')).toBe(true); // returns true
        expect(wordDictionary.search('he...a')).toBe(false); // returns false
    });

    test('should handle empty word dictionary', () => {
        expect(wordDictionary.search('a')).toBe(false); // returns false
        expect(wordDictionary.search('.')).toBe(false); // returns false
    });
});