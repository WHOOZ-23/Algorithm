import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int N = sc.nextInt();
        int[] A = new int[N];

        for(int i=0; i<N; i++) {
            A[i] = sc.nextInt();
        }

        int B = sc.nextInt();
        int C = sc.nextInt();

        long viewers = 0;

        for(int a : A) {
            viewers += 1;

            int remain = a - B;

            if(0 < remain) {
                viewers += (remain + C - 1)/C;
            }
        }

        System.out.println(viewers);

        sc.close();
    }
}