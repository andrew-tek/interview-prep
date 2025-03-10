class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if(nums.length == 0) return 0;
        if(nums.length == 1) return nums[0];

        return Math.max(this.helper(nums.slice(1)), this.helper(nums.slice(0, -1)));
    }

    helper(nums){
        if (nums.length == 0) return 0;
        if (nums.length == 1) return nums[0];

        const maxRob = new Array(nums.length).fill(0);
        maxRob[0] = nums[0];
        maxRob[1] = Math.max(nums[1], nums[0]);
        for(let i = 2; i < nums.length; i++){
            maxRob[i] = Math.max(maxRob[i - 1], maxRob[i - 2] + nums[i]);
        }
        return maxRob[nums.length - 1];
    }
}

module.exports = Solution;