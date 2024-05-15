import java.util.*;

public class Solution {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        StringBuilder sb = new StringBuilder();

        for(int i=1; i<=10; i++) {
            int T = scanner.nextInt();
            int[] arr = new int[T];

            for(int j=0; j<T; j++) {
                arr[j] = scanner.nextInt();
            }

            int result = 0;

            for(int k=2; k<arr.length-2; k++) {
                int left = Math.max(arr[k-2], arr[k-1]);
                int right = Math.max(arr[k+1], arr[k+2]);
                int maxHeight = Math.max(left, right);

                if(0 < arr[k]-maxHeight) {
                    result += arr[k]-maxHeight;
                }
            }

            sb.append("#").append(i).append(" ").append(result).append("\n");
        }

        System.out.println(sb.toString());

        scanner.close();
    }
}