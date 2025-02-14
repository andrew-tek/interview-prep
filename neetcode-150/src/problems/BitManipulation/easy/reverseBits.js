class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number} - a positive integer
     */
    reverseBits(n) {
        let binary = 0;
        for(let i = 0; i < 32; i++){
            const bit = (n >>> i) & 1;
            binary += bit << (31 - i);
        }
        return binary >>> 0;
    }
}

module.exports = Solution;