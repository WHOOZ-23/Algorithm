import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();

        int[] Fibonacci = new int[n+1];
        Fibonacci[0] = 0;
        Fibonacci[1] = 1;

        for(int i=2; i<Fibonacci.length; i++) {
            Fibonacci[i] = Fibonacci[i-1] + Fibonacci[i-2];
        }

        System.out.println(Fibonacci[n]);

        sc.close();
    }
}