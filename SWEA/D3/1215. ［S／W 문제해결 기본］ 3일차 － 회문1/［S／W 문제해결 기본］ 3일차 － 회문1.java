import java.util.*;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        for(int test_case = 1; test_case <= 10; test_case++) {
            int len = sc.nextInt();
            String[] arr = new String[8];

            for(int i = 0; i < 8; i++) {
                arr[i] = sc.next();
            }

            System.out.printf("#%d %d\n", test_case, palindrome(arr, len));
        }

        sc.close();
    }

    private static int palindrome(String[] arr, int len) {
        int cnt = 0;

        for(int i = 0; i < 8; i++) {
            StringBuilder sb = new StringBuilder();
            for(int j = 0; j < 8 - len + 1; j++) {
                sb.append(arr[i], j, j + len);
                if(sb.toString().contentEquals(sb.reverse())) {
                    cnt++;
                }
                sb = new StringBuilder();
            }
        }

        for(int i = 0; i < 8; i++) {
            StringBuilder sb = new StringBuilder();
            for(int j = 0; j < 8 - len + 1; j++) {
                for(int k = j; k < j + len; k++) {
                    sb.append(arr[k].charAt(i));

                }

                if(sb.toString().contentEquals(sb.reverse())) {
                    cnt++;
                }
                sb = new StringBuilder();
            }
        }

        return cnt;
    }
}