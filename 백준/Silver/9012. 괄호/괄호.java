import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int T = scanner.nextInt();
        Stack<Character> stack = new Stack<>();
        StringBuilder sb = new StringBuilder();

        for(int i=0; i<T; i++) {
            String str = scanner.next();

            for(int j=0; j<str.length(); j++) {
                if(str.charAt(j)=='(') {
                    stack.push(str.charAt(j));
                } else {
                    if(!stack.isEmpty() && stack.peek()=='(') {
                        stack.pop();
                    } else {
                        stack.push(str.charAt(j));
                    }
                }
            }

            if(stack.isEmpty()) {
                sb.append("YES").append("\n");
            } else {
                sb.append("NO").append("\n");
                stack.clear();
            }
        }

        System.out.println(sb);

        scanner.close();
    }
}