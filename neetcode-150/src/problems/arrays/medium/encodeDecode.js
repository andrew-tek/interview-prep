class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = "";
        for(const s of strs){
            res += s.length + "#" + s;
        }
        return res;
    }

    /*
    encode(["hello", "world"]) => "5#hello5#world"
    */

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = [];
        let i = 0;

        while (i < str.length){
            let j = i;
            while (str[j] !== "#"){
                j++;
            }
            let length = parseInt(str.substring(i, j));
            i = j + 1;
            j = i + length;
            res.push(str.substring(i, j));
            i = j;
        }
        return res;
    }

    /*
    decode("5#hello5#world") => ["hello", "world"]
    */
}

module.exports = Solution;