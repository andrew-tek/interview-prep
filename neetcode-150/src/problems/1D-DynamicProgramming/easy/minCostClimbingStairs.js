class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        let n = cost.length;
        let costTracker = new Array(n + 1).fill(0);

        for(let i = 2; i <= n; i++){
            costTracker[i] = Math.min(costTracker[i - 1] + cost[i - 1], costTracker[i - 2] + cost [i - 2]);
        }

        return costTracker[n];


    }
}

module.exports = Solution;