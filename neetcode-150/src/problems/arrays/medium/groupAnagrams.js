class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let sol = {};
        for(let str of strs){
            let sortedString = str.split('').sort().join('');
            if(!sol[sortedString]){
                sol[sortedString] = [str];
            } else {
                sol[sortedString].push(str);
            }
        }
        return Object.values(sol);
    }
}

module.exports = Solution;