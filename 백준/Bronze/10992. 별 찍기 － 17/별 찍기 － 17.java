import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        StringBuilder sb = new StringBuilder();

        int N = sc.nextInt();

        for(int i=1; i<=N; i++) {
            if(i==1 || i==N) {
                sb.append(" ".repeat(N-i)).append("*".repeat(2*i-1)).append("\n");
            } else {
                sb.append(" ".repeat(N-i)).append("*").append(" ".repeat(2*i-3)).append("*").append("\n");
            }
        }

        System.out.println(sb);

        sc.close();
    }
}