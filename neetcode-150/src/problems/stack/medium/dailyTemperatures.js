class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const res = new Array(temperatures.length).fill(0);
        const stack = []; // pair: [temp, index]

        for(let i = 0; i < temperatures.length; i++){
            const t = temperatures[i];
            while(stack.length > 0 && t > stack[stack.length - 1][0]){
                const [stackT, stackInd] = stack.pop();
                res[stackInd] = i - stackInd;
            }
            stack.push([t, i]);
        }
        return res;
    }
}

/*
    keep track of index and temperature
    if a higher temperature is found we can pop and get the diff between the indeces until the stack is empty or has a higher temp
    we keep pushing to the stack if a higher temperature is not found
*/

module.exports = Solution;