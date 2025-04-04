import java.util.*;

class Solution {
    public int solution(int[] queue1, int[] queue2) {
        long sum1 = Arrays.stream(queue1).sum();
        long sum2 = Arrays.stream(queue2).sum();
        long goal = (sum1 + sum2) / 2;
        int answer = 0;

        Queue<Integer> arrqueue1 = new LinkedList<>();
        Queue<Integer> arrqueue2 = new LinkedList<>();

        for(int i=0; i<queue1.length; i++) {
            arrqueue1.offer(queue1[i]);
            arrqueue2.offer(queue2[i]);
        }

        while(sum1 != goal) {
            if(sum1 < sum2 && !arrqueue2.isEmpty()) {
                sum1 += arrqueue2.peek();
                sum2 -= arrqueue2.peek();
                arrqueue1.offer(arrqueue2.poll());
            } else if(sum1 > sum2 && !arrqueue1.isEmpty()) {
                sum1 -= arrqueue1.peek();
                sum2 += arrqueue1.peek();
                arrqueue2.offer(arrqueue1.poll());
            }
            answer++;

            if(arrqueue1.size() + arrqueue2.size() + 5 < answer) {
                answer = -1;
                break;
            }
        }

        return answer;
    }
}