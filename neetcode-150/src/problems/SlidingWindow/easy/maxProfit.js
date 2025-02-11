class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let buy = 0, sell = 1, maxProfit = 0;
        while(sell < prices.length){
            if(prices[buy] < prices[sell]){
                maxProfit = Math.max(maxProfit, prices[sell] - prices[buy]);
            } else {
                buy = sell;
            }
            sell++;
        }
        return maxProfit;
    }
}

module.exports = Solution;