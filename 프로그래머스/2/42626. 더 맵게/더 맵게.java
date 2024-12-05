import java.util.*;

class Solution {
    public int solution(int[] scoville, int K) {
        int answer = 0;
        PriorityQueue<Integer> foods = new PriorityQueue<>();

        for (int food : scoville) {
            foods.add(food);
        }

        while(1 < foods.size()) {
            if(K <= foods.peek()) {
                return answer;
            }

            int food1 = foods.poll();
            int food2 = foods.poll();

            foods.add(food1 + food2 * 2);
            answer++;
        }

        if(K <= foods.peek()) {
            return answer;
        }

        return -1;
    }
}