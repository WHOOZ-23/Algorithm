import java.util.*;

public class Solution {
    static String[] numbers;
    static int chance, max;

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int T = sc.nextInt();

        for(int test_case = 1; test_case <= T; test_case++) {
            numbers = sc.next().split("");
            chance = sc.nextInt();
            max = 0;

            if(numbers.length < chance) {
                chance = numbers.length;
            }

            dfs(0, 0);

            System.out.printf("#%d %d\n", test_case, max);
        }

        sc.close();
    }

    private static void dfs(int start, int cnt) {
        if(cnt == chance) {
            StringBuilder result = new StringBuilder();

            for(String str : numbers) {
                result.append(str);
            }

            max = Math.max(max, Integer.parseInt(result.toString()));
            return;
        }

        for(int i = start; i < numbers.length; i++) {
            for(int j = i + 1; j < numbers.length; j++) {
                String temp = numbers[i];
                numbers[i] = numbers[j];
                numbers[j] = temp;

                dfs(i, cnt + 1);

                temp = numbers[i];
                numbers[i] = numbers[j];
                numbers[j] = temp;
            }
        }
    }
}