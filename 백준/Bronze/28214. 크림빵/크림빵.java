import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int N = scanner.nextInt();
        int K = scanner.nextInt();
        int P = scanner.nextInt();
        int[] bread = new int[N*K];
        int set = N;

        for(int i=0; i<N*K; i++) {
            bread[i] = scanner.nextInt();
        }

        for(int i=0; i<N; i++) {
            int cnt = 0;
            for(int j=0; j<K; j++) {
                if(bread[i*K+j] == 0) cnt++;
            }
            if(P <= cnt) set--;
        }

        System.out.println(set);

        scanner.close();
    }
}