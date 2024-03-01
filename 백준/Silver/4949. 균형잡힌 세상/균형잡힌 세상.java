import java.util.*;

public class Main {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        StringBuilder sb = new StringBuilder();

        while(true) {
            String str = scanner.nextLine();

            if(str.equals(".")) break;

            Stack<Character> stack = new Stack<>();

            for(int i=0; i<str.length(); i++) {
                char s = str.charAt(i);

                if(s=='(' || s=='[') {
                    stack.push(s);
                    continue;
                }

                if(s==')') {
                    if(!stack.isEmpty() && stack.peek()=='(') {
                        stack.pop();
                    } else {
                        stack.push(s);
                    }
                }

                if(s==']') {
                    if(!stack.isEmpty() && stack.peek()=='[') {
                        stack.pop();
                    } else {
                        stack.push(s);
                    }
                }
            }

            if(stack.isEmpty()) {
                sb.append("yes").append("\n");
            } else {
                sb.append("no").append("\n");
            }
        }

        System.out.println(sb.toString());

        scanner.close();
    }
}