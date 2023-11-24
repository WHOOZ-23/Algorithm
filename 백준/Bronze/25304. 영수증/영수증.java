import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		
		Scanner scanner = new Scanner(System.in);
		
		int X = scanner.nextInt();
		int N = scanner.nextInt();
		int arr[] = new int[N];
		int sum = 0;
		
		if(1 <= X && X <= 1000000000) {
			if(1 <= N && N <= 100) {
				for(int i = 0; i < N; i++) {
					int a = scanner.nextInt();
					int b = scanner.nextInt();
					arr[i] = a*b;
				}
			}
		}
		
		for (int a : arr) {
			sum += a;
		}
		
		if(sum == X) {
			System.out.println("Yes");
		} else {
			System.out.println("No");
		}
	}
}