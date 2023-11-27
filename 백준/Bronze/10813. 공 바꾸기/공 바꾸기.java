import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		int N = scanner.nextInt();
		int M = scanner.nextInt();
		int[] arr = new int[N];
		int i, j, temp;
		
		if((1<=N && N<= 100) && (1<=M && M<=100)) {
			for(int x=0; x<N; x++) {
				arr[x] = x+1;
			}
			
			for(int y=0; y<M; y++) {
				i = scanner.nextInt();
				j = scanner.nextInt();
				
				temp = arr[i-1];
				arr[i-1] = arr[j-1];
				arr[j-1] = temp;
			}
			
			for(int a:arr) {
				System.out.print(a+" ");
			}
		}
		scanner.close();
	}
}