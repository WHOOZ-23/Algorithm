import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int N = scanner.nextInt();
        StringBuilder sb = new StringBuilder();

        for(int i=N; i>=1; i--) {
            sb.append(i).append("\n");
        }

        System.out.println(sb.toString());
    }
}