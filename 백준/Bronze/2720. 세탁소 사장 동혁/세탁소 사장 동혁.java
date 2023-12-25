import java.util.Scanner;

public class Main {

	public static void main(String[] args) {		
		Scanner scanner = new Scanner(System.in);
		
		int T = scanner.nextInt();
		
		int[] C = new int[T];
		
		for(int i=0; i<T; i++) {
			
			C[i] = scanner.nextInt();
			
			while(1<=C[i] && C[i]<=500) {
				
				int Quarter = 0;
				int Dime = 0;
				int Nickel = 0;
				int Penny = 0;
				
				if(C[i]>=25) {
					Quarter = C[i]/25;
					C[i] -= Quarter*25;
				}
				
				if(25>C[i] && C[i]>=10) {
					Dime = C[i]/10;
					C[i] -= Dime*10;
				}
				
				if(10>C[i] && C[i]>=5) {
					Nickel = C[i]/5;
					C[i] -= Nickel*5;
				}
				
				if(5>C[i] && C[i]>=1) {
					Penny = C[i];
					C[i] -= Penny;
				}
				System.out.print(Quarter + " " + Dime + " " + Nickel + " " + Penny + "\n");
			}
		}
		scanner.close();
	}
}