class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        let n = nums.length;
        let xorr = n;
        for(let i = 0; i < n; i++){
            xorr ^= i ^ nums[i];
        }
        return xorr;
    }

    /*
        addition of range from 0-n and subtract that from addition of nums.. the difference will be missing number
    */
    // missingNumber(nums) {
    //     let res = nums.length;

    //     for (let i = 0; i < nums.length; i++) {
    //         res += i - nums[i];
    //     }
    //     return res;
    // }
}

module.exports = Solution;