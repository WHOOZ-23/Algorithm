import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		StringBuilder sb = new StringBuilder();
		
		while(true) {
			int n = scanner.nextInt();
			
			if(n==0) break;
			
			int cnt = 0;
			
			for(int i=n+1; i<=2*n; i++) {
				boolean isPrime = true;
				
				if(i==1) continue;
				
				for(int j=2; j<=Math.sqrt(i); j++) {
					if(i%j==0) {
						isPrime = false;
						break;
					}
				}
				
				if(isPrime==true) {
					cnt++;
				}
			}
			
			sb.append(cnt + "\n");
		}
		
		System.out.println(sb.toString());
		
		scanner.close();
	}
}