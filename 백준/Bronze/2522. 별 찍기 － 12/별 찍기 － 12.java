import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        StringBuilder sb = new StringBuilder();

        int n = scanner.nextInt();

        for(int i=1; i<=n; i++) {
            sb.append(" ".repeat(n-i)).append("*".repeat(i)).append("\n");
        }

        for(int i=1; i<=n-1; i++) {
            sb.append(" ".repeat(i)).append("*".repeat(n-i)).append("\n");
        }

        System.out.println(sb.toString());

        scanner.close();
    }
}