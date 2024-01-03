import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		int N = scanner.nextInt();
		int K = scanner.nextInt();
		
		int[] arr = new int[N+1];
		int count = 0;
		
		if(1<=N && N<=10000) {
			for(int i=1; i<=N; i++) {
				if(N%i==0) {
					arr[i] = 1;
					count++;
				}
				
				if(K == count) {
					System.out.println(i);
					break;
				}
			}
			
			if(K > count) {
				System.out.println("0");
			}
		}
		scanner.close();
	}
}