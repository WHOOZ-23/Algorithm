import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        StringBuilder sb = new StringBuilder();

        int N = scanner.nextInt();

        for(int i=1; i<=N; i++) {
            sb.append(" ".repeat(N-i)).append("* ".repeat(i)).append("\n");
        }

        System.out.println(sb);

        scanner.close();
    }
}