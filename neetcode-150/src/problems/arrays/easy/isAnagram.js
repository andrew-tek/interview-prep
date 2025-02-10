class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */

    //sorted
    // isAnagram(s, t) {
    //     if (s.length !== t.length) {
    //         return false;
    //     }
    //     const sortedS = s.split("").sort().join();
    //     const sortedT = t.split("").sort().join();

    //     return sortedS == sortedT
    // }

    //hash
    isAnagram(s, t){
        if (s.length !== t.length) {
            return false;
        }

        const sHash = {};
        const tHash = {};

        for (let i = 0; i < s.length; i++){
            sHash[s[i]] = (sHash[s[i]] || 0) + 1;
            tHash[t[i]] = (tHash[t[i]] || 0) + 1;
        }

        for (const key in sHash){
            if(sHash[key] != tHash[key]){
                return false
            }
        }
        return true;
    }
}

module.exports = Solution;