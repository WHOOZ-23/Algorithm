import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int N = scanner.nextInt();
        int K = scanner.nextInt();

        System.out.println(factorial(N) / (factorial(N-K) * factorial(K)));

        scanner.close();
    }

    public static int factorial(int n) {
        if(n==0) return 1;
        if(n==1) return 1;
        return n * factorial(n-1);
    }
}