import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        StringBuilder sb = new StringBuilder();

        int n = scanner.nextInt();

        for(int i=1; i<=n; i++) {
            sb.append("*".repeat(i)).append("\n");
        }

        for(int j=n-1; 1<=j; j--) {
            sb.append("*".repeat(j)).append("\n");
        }

        System.out.println(sb.toString());

        scanner.close();
    }
}