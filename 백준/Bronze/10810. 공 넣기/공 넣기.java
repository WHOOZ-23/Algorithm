import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		int N = scanner.nextInt();
		int M = scanner.nextInt();
		int[] arr = new int[N];
		int i, j, k;
		
		if((1<=N && N<= 100) && (1<=M && M<100)) {
			for(int n=0; n<N; n++) {
				arr[n] = 0;
			}
			
			for(int x=0; x<M; x++) {
				i = scanner.nextInt();
				j = scanner.nextInt();
				k = scanner.nextInt();
				
				for(int y=i-1; y<j; y++) {
					arr[y] = k;
				}
			}
			
			for(int a:arr) {
				System.out.print(a+" ");
			}
		}
		scanner.close();
	}
}