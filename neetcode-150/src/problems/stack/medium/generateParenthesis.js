class Solution {

    /**
     * @param {number} openN
     * @param {number} closeN
     * @param {number} n
     * @param {string[]} res
     * @param {string} stack
     */
    backTrack(openN, closedN, n, res, stack){
        if(openN === closedN && openN === n){
            res.push(stack);
            return;
        }

        if(openN < n){
            this.backTrack(openN + 1, closedN, n, res, stack + '(');
        }

        if(closedN < openN){
            this.backTrack(openN, closedN + 1, n, res, stack + ')');
        }
    }
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const res = [];
        this.backTrack(0, 0, n, res, '');
        return res;
    }
}

/* 
    think tree of possible scenarios of adding an open or closed
    only add open paranethsis if open < n
    only add a closing paranthesis if closed < open
    valid iif open == closed == n
*/

module.exports = Solution;