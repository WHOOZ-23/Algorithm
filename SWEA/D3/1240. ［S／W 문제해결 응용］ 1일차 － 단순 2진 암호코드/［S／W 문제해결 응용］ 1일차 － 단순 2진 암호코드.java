import java.util.Arrays;
import java.util.Scanner;

public class Solution {
		// 암호 코드를 10진수로 변환하여 배열에 저장
    static int[] code = {13, 25, 19, 61, 35, 49, 47, 59, 55, 11};
    static int[] pw = new int[8];

    public static void main(String[] args) throws Exception {
        Scanner sc = new Scanner(System.in);

        int T = sc.nextInt();

        for(int test_case = 1; test_case <= T; test_case++) {
            int N = sc.nextInt();
            int M = sc.nextInt();
            String[] secret = new String[N];

            for(int i=0; i<N; i++) {
                secret[i] = sc.next();
            }

            for(int i = 0; i < N; i++) {
                String line = secret[i];
                
                for(int j = M - 1; j > M - 56; j--) {
		                // 암호 코드들 모두 마지막이 1로 끝나므로
		                // 뒤에서부터 탐색해서 1을 찾으면 뒤에서부터 56자리 암호코드 추출
                    if(line.charAt(j) == '1') {
                        int index = 0;
                        for(int k = j - 55; k <= j; k += 7) {
                            pw[index++] = convertCode(line.substring(k, k + 7));
                        }
                        // 암호코드 찾으면 바로 break
                        break;
                    }
                }
            }

            System.out.printf("#%d %d\n", test_case, validateCode());
        }

        sc.close();
    }

		// 암호코드를 10진수로 변환 후 인덱스 값을 return
    private static int convertCode(String str) {
        int decimal = Integer.parseInt(str, 2);

        for(int i = 0; i < code.length; i++) {
            if(decimal == code[i]) {
                return i;
            }
        }

        return 0;
    }

		// 올바른 암호코드인지 아닌지 판별
    private static int validateCode() {
        int validate = 0;
        int sum = 0;

        for(int i = 0; i < pw.length; i++) {
            if(i % 2 == 0) {
                validate += 3 * pw[i];
            } else {
                validate += pw[i];
            }

            sum += pw[i];
        }

        if(validate % 10 == 0) {
            return sum;
        } else {
            return 0;
        }
    }
}