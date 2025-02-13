class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
        const seenNumbers = new Set();

        while(!seenNumbers.has(n)){
            seenNumbers.add(n);
            n = this.sumOfSquares(n);
            if (n === 1) return true;
        }

        return false;
    }

    sumOfSquares(n){
        let output = 0;

        while(n > 0){
            let digit = n % 10;
            digit = digit * digit;
            output += digit;
            n = Math.floor(n / 10);
        }
        return output;
    }
}

module.exports = Solution;