import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int N = scanner.nextInt();
        int K = scanner.nextInt();
        int P = scanner.nextInt();
        int set = 0;

        for(int i=0; i<N; i++) {
            int cnt = 0;
            for(int j=0; j<K; j++) {
                int bread = scanner.nextInt();
                if(bread == 1) cnt++;
            }
            if(P <= cnt) set++;
        }

        System.out.println(set);

        scanner.close();
    }
}