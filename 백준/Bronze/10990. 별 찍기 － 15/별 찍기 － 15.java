import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        StringBuilder sb = new StringBuilder();

        int N = scanner.nextInt();

        for (int i=1; i<=N; i++) {
            sb.append(" ".repeat(N-i)).append("*");

            if(2<=i) {
                sb.append(" ".repeat(2*i-3)).append("*");
            }

            sb.append("\n");
        }

        System.out.println(sb.toString());

        scanner.close();
    }
}