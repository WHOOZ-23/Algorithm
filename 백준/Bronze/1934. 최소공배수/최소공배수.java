import java.util.Scanner;

public class Main {
	public static int GCD(int a, int b) {
		if(a%b==0) {
			return b;
		} else {
			return GCD(b, a%b);
		}
	}
	
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		int T = scanner.nextInt();
		int[][] num = new int[T][2];
		
		for(int i=0; i<T; i++) {
			for(int j=0; j<2; j++) {
				num[i][j] = scanner.nextInt();
			}
		}
		
		for(int[] n:num) {
			System.out.println(n[0]*n[1] / GCD(n[0], n[1]));
		}
		
		scanner.close();
	}
}