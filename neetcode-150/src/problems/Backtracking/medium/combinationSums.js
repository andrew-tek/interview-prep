class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        nums.sort((a, b) => a - b);
        let result = [];
        
        const dfs = (i, cur, sum) => {
            if(sum === target){
                result.push([...cur]);
                return;
            }
            if(i >= nums.length || sum > target) return;

            cur.push(nums[i]);
            dfs(i, cur, sum + nums[i]);
            cur.pop();
            dfs(i + 1, cur, sum);
        }

        dfs(0, [], 0);
        return result;
    }
}

module.exports = Solution;