import java.util.ArrayList;
import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		int M = scanner.nextInt();
		int N = scanner.nextInt();
		
		ArrayList<Integer> arr = new ArrayList<Integer>();
		
		int sum = 0;
		int min = N;
		
		if(M<=10000 && N<=10000 && M<=N) {
			for(int i=M; i<=N; i++) {
				if(i==1) continue;
				arr.add(i);
				for(int j=2; j<=Math.sqrt(i); j++) {
					if(i%j==0) {
						arr.remove(Integer.valueOf(i));
						break;
					}
				}
			}
			
			if(arr.isEmpty()) {
				System.out.println("-1");
			} else {
				for(int a:arr) {
					sum += a;
					min = min > a ? a : min;
				}				
				
				System.out.println(sum);
				System.out.println(min);
			}
		}
		scanner.close();
	}
}