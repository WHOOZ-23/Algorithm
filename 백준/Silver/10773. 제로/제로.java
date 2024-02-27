import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int K = scanner.nextInt();
        int sum = 0;
        Stack<Integer> stack = new Stack<>();

        for(int i=0; i<K; i++) {
            int N = scanner.nextInt();

            if(N==0) {
                stack.pop();
            } else {
                stack.push(N);
            }
        }

        for(int s:stack) {
            sum += s;
        }

        System.out.println(sum);

        scanner.close();
    }
}