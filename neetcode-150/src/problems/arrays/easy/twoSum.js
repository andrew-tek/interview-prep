class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let prevMap = new Map();
        for(let i = 0; i < nums.length; i++){
            let diff = target - nums[i];
            if(prevMap.has(diff)){
                return[prevMap.get(diff), i];
            } else {
                prevMap.set(nums[i], i);
            }
        }
    }
}

module.exports = Solution;