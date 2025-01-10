import java.util.*;

class Solution {
    public int[] solution(int[] numbers) {
        int[] answer = new int[numbers.length];
        Stack<Integer> stack = new Stack<>();
        
        answer[answer.length-1] = -1;

        for(int i=numbers.length-2; i>=0; i--) {
            if(numbers[i] < numbers[i+1]) {
                answer[i] = numbers[i+1];
                stack.push(numbers[i+1]);
            } else {
                while(!stack.isEmpty()) {
                    if(numbers[i] < stack.peek()) {
                        answer[i] = stack.peek();
                        break;
                    } else {
                        stack.pop();
                    }
                }

                if(answer[i] == 0) {
                    answer[i] = -1;
                }
            }
        }

        return answer;
    }
}