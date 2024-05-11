import java.util.Scanner;
import java.io.FileInputStream;

/*
   사용하는 클래스명이 Solution 이어야 하므로, 가급적 Solution.java 를 사용할 것을 권장합니다.
   이러한 상황에서도 동일하게 java Solution 명령으로 프로그램을 수행해볼 수 있습니다.
 */
class Solution
{
	public static void main(String args[]) throws Exception
	{
		Scanner scanner = new Scanner(System.in);
        StringBuilder sb = new StringBuilder();

        int T = scanner.nextInt();

        for(int i=0; i<T; i++) {
            sb.append("#").append(i+1).append(" ");

            String date = scanner.next();
            int month = (Integer.parseInt(date) % 10000) / 100;
            int day = Integer.parseInt(date) % 100;

            if(month<1 || month>12) {
                sb.append(-1).append("\n");
                continue;
            } else if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
                if(day<1 || day>31) {
                    sb.append(-1).append("\n");
                    continue;
                }
            } else if(month == 4 || month == 6 || month == 9 || month == 11) {
                if(day<1 || day>30) {
                    sb.append(-1).append("\n");
                    continue;
                }
            } else {
                if(day<1 || day>28) {
                    sb.append(-1).append("\n");
                    continue;
                }
            }

            sb.append(date, 0, 4).append("/").append(date, 4, 6).append("/").append(date, 6, 8).append("\n");
        }

        System.out.println(sb.toString());

        scanner.close();
	}
}