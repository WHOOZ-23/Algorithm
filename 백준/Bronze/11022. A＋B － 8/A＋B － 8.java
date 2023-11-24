import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		
		Scanner scanner = new Scanner(System.in);
		
		int T = scanner.nextInt();
		int arr1[] = new int[T];
		int arr2[] = new int[T];
		int arr3[] = new int[T];
		
		for(int i = 0; i < T; i++) {
			int A = scanner.nextInt();
			int B = scanner.nextInt();
			if((0 < A && A < 10) && (0 < B && B < 10)) {
				arr1[i] = A;
				arr2[i] = B;
				arr3[i] = A+B;
			}
		}
		
		for(int j = 1; j <= T; j++) {
			System.out.println("Case #" + j + ": " + arr1[j-1] +" + "+ arr2[j-1] + " = " + arr3[j-1]);
		}		
	}
}