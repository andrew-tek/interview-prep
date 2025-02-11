class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        for(let ch of s){
            if(ch == '(' || ch == '{' || ch == '['){
                stack.push(ch);
            } else if (ch == ')' || ch == '}' || ch == ']'){
                if(stack.length == 0) {
                    return false
                } else if(stack.pop() != this.getOpen(ch)){
                    return false;
                }
            }
        }
        return stack.length === 0;
    }


    /**
     * @param {char} c
     * @return {char}
     */

    getClosed(c){
        if(c == '(') return ')';
        if(c == '{') return '}';
        if(c == '[') return ']';
    }

        /**
     * @param {char} c
     * @return {char}
     */

    getOpen(c){
        if(c == ')') return '(';
        if(c == '}') return '{';
        if(c == ']') return '[';
    }
}

module.exports = Solution;