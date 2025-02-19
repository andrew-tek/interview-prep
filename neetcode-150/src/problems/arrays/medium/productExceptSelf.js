class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length; 
        const res = new Array(n).fill(1);

        for(let i = 1; i < n; i++){ 
            res[i] = res[i - 1] * nums[i - 1];
        }
        let postfix = 1;
        for(let i = n - 1; i >= 0; i--){
            res[i] *= postfix;
            postfix *= nums[i]; 
        }
        return res;
    }

    /*
        create result array of size of nums
        calculate the prefix and store in result array
            prefix = all numbers to the left of i multiplied by each other
        calculate postfix and multiply by the value in res[i]

        [1, 2, 3, 4]
        prefix: [1, 2, 6, 24]
        postfix: [24, 24, 12, 4]
        result: [24 (1 * 24), 12 (1 * 12), 8 (2 * 4), 6 (6 * 1)]
    */
}

module.exports = Solution;