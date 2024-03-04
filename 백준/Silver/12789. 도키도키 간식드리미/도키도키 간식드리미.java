import java.util.*;

public class Main {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        int N = scanner.nextInt();
        Stack<Integer> stack = new Stack<>();
        int num = 1;

        for(int i=0; i<N; i++) {
            int line = scanner.nextInt();

            if(num==line) {
                num++;
            } else {
                stack.push(line);
            }

            if(!stack.isEmpty() && num==stack.peek()) {
                while(!stack.isEmpty()) {
                    if(num==stack.peek()) {
                        stack.pop();
                        num++;
                    } else {
                        break;
                    }
                }
            }
        }

        while(!stack.isEmpty()) {
            if(num==stack.peek()) {
                stack.pop();
                num++;
            } else {
                break;
            }
        }

        if(stack.isEmpty()) {
            System.out.println("Nice");
        } else {
            System.out.println("Sad");
        }

        scanner.close();
    }
}