import java.util.*;

public class Solution {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        StringBuilder sb = new StringBuilder();

        for(int i=1; i<=10; i++) {
            int dump = scanner.nextInt();
            int[] arr = new int[100];

            for(int j=0; j<100; j++) {
                arr[j] = scanner.nextInt();
            }

            Arrays.sort(arr);

            for(int k = 0; k<dump; k++) {
                arr[0]++;
                arr[99]--;
                Arrays.sort(arr);

                if(arr[0] == arr[99] || arr[0] == arr[99]-1) {
                    sb.append("#").append(i).append(" ").append(arr[99]-arr[0]).append("\n");
                    break;
                }
            }

            sb.append("#").append(i).append(" ").append(arr[99]-arr[0]).append("\n");
        }

        System.out.println(sb.toString());

        scanner.close();
    }
}