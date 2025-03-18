class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        intervals.sort((a, b) => a[0] - b[0]);
        let solution = [];
        solution.push(intervals[0]);

        for(const interval of intervals){
            const start = interval[0];
            const end = interval[1];
            const lastEnd = solution[solution.length - 1][1];

            if(start <= lastEnd){
                solution[solution.length - 1][1] = Math.max(lastEnd, end);
            } else {
                solution.push([start, end]);
            }
        }
        return solution;

    }
}

module.exports = Solution;