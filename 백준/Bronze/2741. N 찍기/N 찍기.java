import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int N = scanner.nextInt();
        StringBuilder sb = new StringBuilder();

        for(int i=1; i<=N; i++) {
            sb.append(i).append("\n");
        }

        System.out.println(sb.toString());
    }
}