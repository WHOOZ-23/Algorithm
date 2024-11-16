import java.util.*;

public class Solution {
    static String[] numbers = {"ZRO", "ONE", "TWO", "THR", "FOR", "FIV", "SIX", "SVN", "EGT", "NIN"};
    static int len;

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int T = Integer.parseInt(sc.nextLine());

        for(int test_case = 1; test_case <= T; test_case++) {
            String ts = sc.nextLine();
            len = Integer.parseInt(ts.split(" ")[1]);
            String str = sc.nextLine();
            String[] arr = str.split(" ");

            System.out.printf("#%d\n %s\n", test_case, sortNum(arr));
        }

        sc.close();
    }

    private static String sortNum(String[] arr1) {
        StringBuilder sb = new StringBuilder();
        int[] arr2 = new int[len];

        for(int i = 0; i < len; i++) {
            arr2[i] = Arrays.asList(numbers).indexOf(arr1[i]);
        }

        Arrays.sort(arr2);

        for(int i = 0; i < len; i++) {
            if(i == len - 1) {
                sb.append(numbers[arr2[i]]);
            } else {
                sb.append(numbers[arr2[i]]).append(" ");
            }
        }

        return sb.toString();
    }
}
