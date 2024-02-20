import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		int T = scanner.nextInt();
		long[] arr = new long[T];
		
		for(int i=0; i<T; i++) {
			arr[i] = scanner.nextLong();
			
			if(arr[i]<=2) {
				arr[i]=2;
			} else {
				int j=2;
				
				while(j<=Math.sqrt(arr[i])) {				
					if(arr[i]%j==0) {
						arr[i]++;
						j=1;
					}
					
					j++;
				}
			}
		}
		
		for(long a:arr) {
			System.out.println(a);
		}
		
		scanner.close();
	}
}