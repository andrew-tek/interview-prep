class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let start = 0, end = numbers.length - 1;
        while(start < end){
            let sum = numbers[start] + numbers[end];
            if(sum < target){
                start++;
            } else if (sum > target){
                end--;
            } else return [start + 1, end + 1]
        }
        return[];
    }
}

module.exports = Solution;