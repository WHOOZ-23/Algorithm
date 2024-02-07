import java.util.Arrays;
import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		int N = scanner.nextInt();
		int[][] dots = new int[N][2];
		
		for(int i=0; i<N; i++) {
			for(int j=0; j<2; j++) {
				dots[i][j] = scanner.nextInt();
			}
		}
		
		Arrays.sort(dots, (d1, d2) -> {
			if(d1[1]==d2[1]) {
				return d1[0]-d2[0];
			}
			
			return d1[1]-d2[1];
		});
		
		for(int[] d:dots) {
			System.out.println(d[0] + " " + d[1]);
		}
		
		scanner.close();
	}
}