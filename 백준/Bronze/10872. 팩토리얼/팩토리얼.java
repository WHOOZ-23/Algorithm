import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int N = scanner.nextInt();

        if(N==0) {
            System.out.println(1);
        } else {
            System.out.println(factorial(N));
        }

    }

    public static int factorial(int n) {
        if(n==1) return 1;
        return n * factorial(n-1);
    }
}