import java.util.Scanner;

public class Main {
	
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		int N = scanner.nextInt();
		int M = scanner.nextInt();
		int[] arr = new int[N];
		int max = 0;
		
		for(int i=0; i<N; i++) {
			arr[i] = scanner.nextInt();
		}
		
		for(int j=0; j<N-2; j++) {
			for(int k=j+1; k<N-1; k++) {
				for(int l=k+1; l<N; l++) {
					int result = arr[j] + arr[k] + arr[l];
					
					if(result==M) {
						max = result;
						break;
					}
					
					if(max<result && result<M) {
						max = result;
					}
				}
			}
		}
		
		System.out.println(max);
		
		scanner.close();
	}
}