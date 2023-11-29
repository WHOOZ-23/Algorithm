import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		int N = scanner.nextInt();
		int[] arr = new int[N+1];
		int temp;
		
		if(1<=N && N<=100) {
			for(int x=1; x<=N; x++) {
				arr[x] = x;
			}
			int M = scanner.nextInt();
			
			if(1<=M && M<=100) {
				for(int y=0; y<M; y++) {
					int i = scanner.nextInt();
					int j = scanner.nextInt();
					
					for(int z=i; z<j; z++) {
						temp = arr[z];
						arr[z] = arr[j];
						arr[j] = temp;
						j--;
					}
				}
				
				for(int a=1; a<=N; a++) {
					System.out.print(arr[a] + " ");
				}
			}
		}
		
		scanner.close();
	}
}