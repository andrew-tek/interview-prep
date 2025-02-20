class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let count = new Map();
        let res = 0;
        let l = 0, maxF = 0;
        for(let r = 0; r < s.length; r++){
            count.set(s[r], (count.get(s[r]) || 0) + 1);
            maxF = Math.max(count.get(s[r]), maxF);
            while ((r - l + 1) - maxF > k){
                count.set(s[l], count.get(s[l]) - 1);
                l++;
            }
            res = Math.max(res, r - l + 1);
        }
        return res;
    }
}
    /**
     * record max frequency of a character in the sliding window
     * if the max frequency + k < window size, aka the window is not 'valid', shrink the window
     * if the window size is greater than previous we can set that as a result and move on in the loop
     */
module.exports = Solution;