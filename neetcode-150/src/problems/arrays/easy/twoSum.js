class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const hashTable = new Map();
        for(let i = 0; i < nums.length; i++){
            let numberNeeded = target - nums[i];
            if(hashTable.has(numberNeeded)){
                return [i, hashTable.get(numberNeeded)]
            } else {
                hashTable.set(nums[i], i);
            }
        }
    }
}

module.exports = Solution;