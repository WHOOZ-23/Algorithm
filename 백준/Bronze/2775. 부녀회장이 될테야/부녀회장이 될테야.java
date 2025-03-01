import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int T = sc.nextInt();
        int[][] apt = new int[15][15];
        StringBuilder sb = new StringBuilder();

        for(int i=0; i<15; i++) {
            apt[0][i] = i;
            apt[i][0] = 0;
        }

        for(int i=0; i<T; i++) {
            int k = sc.nextInt();
            int n = sc.nextInt();

            for(int j=1; j<=k; j++) {
                for(int l=1; l<=n; l++) {
                    apt[j][l] = apt[j-1][l] + apt[j][l-1];
                }
            }

            sb.append(apt[k][n]).append("\n");
        }

        System.out.println(sb);

        sc.close();
    }
}