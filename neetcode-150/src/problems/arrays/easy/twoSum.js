class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const hashTable = {};
        for(let i = 0; i < nums.length; i++){
            let numberNeeded = target - nums[i];
            if(numberNeeded in hashTable){
                return [i, hashTable[numberNeeded]]
            } else {
                hashTable[nums[i]] = i;
            }
        }
    }
}

module.exports = Solution;