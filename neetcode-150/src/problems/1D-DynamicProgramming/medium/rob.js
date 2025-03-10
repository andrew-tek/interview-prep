class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if(nums.length === 0) return 0;
        if(nums.length === 1) return nums[0];

        const maxRob = new Array(nums.length).fill(0);
        maxRob[0] = nums[0];
        maxRob[1] = Math.max(nums[0], nums[1]);
        for(let i = 2; i < nums.length; i++){
            maxRob[i] = Math.max(maxRob[i - 1], nums[i] + maxRob[i - 2])
        }
        return maxRob[maxRob.length - 1];
    }
}

module.exports = Solution;