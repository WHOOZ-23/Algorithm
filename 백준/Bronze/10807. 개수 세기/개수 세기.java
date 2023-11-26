import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		int N = scanner.nextInt();
		int arr[] = new int[N];
		int j = 0;
		
		if(1 <= N && N <=100) {
			for(int i = 0; i < N; i++) {
				int x = scanner.nextInt();
				arr[i] = x;
			}
			
			int v = scanner.nextInt();
			
			for(int a : arr) {
				if(v == a) {
					j++;
				} else {
					continue;
				}
			}
			
			System.out.println(j);
		}
		scanner.close();
	}
}