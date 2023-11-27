import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		int N = scanner.nextInt();
		int arr[] = new int[N];
		int max = -1000000;
		int min = 1000000;
		
		if(1 <= N && N <= 1000000)
		{
			for(int i=0; i < N; i++) {
				int x = scanner.nextInt();
				arr[i] = x;
			}
			
			for(int a : arr) {
				max = Math.max(max, a);
				min = Math.min(min, a);
			}
			System.out.print(min + " ");
			System.out.println(max);
		}
		scanner.close();
	}
}