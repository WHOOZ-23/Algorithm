import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		int N = scanner.nextInt();
		int X = scanner.nextInt();
		int A[] = new int[N];
		
		if(1 <= N && N <=10000) {
			for(int i = 0; i < N; i++) {
				int a = scanner.nextInt();
				A[i] = a;
			}
			for(int arr : A) {
				if(arr < X) {
					System.out.print(arr + " ");
				}
			}
			System.out.println();
		}
		scanner.close();
	}
}