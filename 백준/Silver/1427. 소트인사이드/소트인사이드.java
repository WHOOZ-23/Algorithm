import java.util.Arrays;
import java.util.Collections;
import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		int N = scanner.nextInt();
		int len = Integer.toString(N).length();
		Integer[] num = new Integer[len];
		
		for(int i=0; i<len; i++) {
			num[i] = N%10;
			N/=10;
		}
		
		Arrays.sort(num, Collections.reverseOrder());
		
		for(int n:num) {
			System.out.print(n);
		}
		
		scanner.close();
	}
}