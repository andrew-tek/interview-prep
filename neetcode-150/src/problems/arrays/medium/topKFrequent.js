class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let count = {};
        const freq = Array.from({ length: nums.length + 1}, () => []);
        for (const n of nums){
            count[n] = (count[n] || 0) + 1;
        }
        for (const n in count){
            freq[count[n]].push(parseInt(n));
        }

        const res = [];
        for(let i = freq.length - 1; i > 0; i--){
            for (const n of freq[i]){
                res.push(n);
                if(res.length === k){
                    return res;
                }
            }
        }
    }

    /*
    get a count of how many times each element exists in array
    add it to frequency array freq[i] will have the values that occur 'i' times
    get solution by starting from end of freq and going until you have size k array
    */
}

module.exports = Solution;