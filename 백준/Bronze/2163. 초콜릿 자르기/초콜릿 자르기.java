import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        StringBuilder sb = new StringBuilder();

        int N = scanner.nextInt();
        int M = scanner.nextInt();

        int cnt = (N-1) + (M-1) * N;

        System.out.println(cnt);

        scanner.close();
    }
}