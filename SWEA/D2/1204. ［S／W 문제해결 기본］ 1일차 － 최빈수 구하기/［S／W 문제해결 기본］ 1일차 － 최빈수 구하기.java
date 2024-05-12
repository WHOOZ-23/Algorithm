import java.util.*;

public class Solution {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        StringBuilder sb = new StringBuilder();

        int T = scanner.nextInt();

        for(int i=0; i<T; i++) {
            int t = scanner.nextInt();
            int[] arr = new int[101];

            for(int j=0; j<1000; j++) {
                arr[scanner.nextInt()]++;
            }

            int max = 0;
            int cnt = 0;

            for(int k=0; k<arr.length; k++) {
                if(max <= arr[k]) {
                    max = arr[k];
                    cnt = k;
                }
            }

            sb.append("#").append(t).append(" ").append(cnt).append("\n");
        }

        System.out.println(sb.toString());

        scanner.close();
    }
}