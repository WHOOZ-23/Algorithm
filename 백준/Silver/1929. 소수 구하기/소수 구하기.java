import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		int M = scanner.nextInt();
		int N = scanner.nextInt();
		
		List<Integer> prime = new ArrayList<>();
		
		for(int i=M; i<=N; i++) {
			boolean isPrime = true;
			
			if(i==1) continue;
			
			for(int j=2; j<=Math.sqrt(i); j++) {
				if(i%j==0) {
					isPrime = false;
					break;
				}
			}
			
			if(isPrime==true) {
				prime.add(i);
			}
		}
		
		for(int p:prime) {
			System.out.println(p);
		}
		
		scanner.close();
	}
}