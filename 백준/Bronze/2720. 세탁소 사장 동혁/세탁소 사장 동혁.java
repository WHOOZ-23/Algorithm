import java.util.Scanner;

public class Main {

	public static void main(String[] args) {		
		Scanner scanner = new Scanner(System.in);
		
		int T = scanner.nextInt();
		
		int[] C = new int[T];
		int[][] coins = new int[T][4];
		
		for(int i=0; i<T; i++) {
			
			C[i] = scanner.nextInt();
			
			while(1<=C[i] && C[i]<=500) {
				
				if(C[i]>=25) {
					coins[i][0] = C[i]/25;
					C[i] -= coins[i][0]*25;
				}
				
				if(25>C[i] && C[i]>=10) {
					coins[i][1] = C[i]/10;
					C[i] -= coins[i][1]*10;
				}
				
				if(10>C[i] && C[i]>=5) {
					coins[i][2] = C[i]/5;
					C[i] -= coins[i][2]*5;
				}
				
				if(5>C[i] && C[i]>=1) {
					coins[i][3] = C[i];
					C[i] -= coins[i][3];
				}
			}
		}
		
		for(int j=0; j<T; j++) {
			System.out.print(coins[j][0] + " " + coins[j][1] + " " + coins[j][2] + " " + coins[j][3] + "\n");
		}
		scanner.close();
	}
}