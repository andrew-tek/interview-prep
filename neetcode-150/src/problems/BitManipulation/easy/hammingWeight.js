class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number}
     */
    hammingWeight(n) {
        let count = 0;
        while(n !== 0){
            n &= n - 1;
            count++;
        }
        return count;
    }
}

module.exports = Solution;