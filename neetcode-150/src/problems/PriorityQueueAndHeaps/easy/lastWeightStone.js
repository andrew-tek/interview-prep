const { MaxPriorityQueue } = require('@datastructures-js/priority-queue');

class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        let maxHeap = new MaxPriorityQueue();
        stones.forEach((stone) => maxHeap.enqueue(stone));
        while(maxHeap.size() > 1){
            let stone1 = maxHeap.dequeue();
            let stone2 = maxHeap.dequeue();

            if(stone1 > stone2){
                maxHeap.enqueue(stone1 - stone2);
            }
        }
        if(maxHeap.size() == 1){
            return maxHeap.dequeue();
        } else return 0;
    }
}

module.exports = Solution;