import java.util.Scanner;

public class Main {

	public static void main(String[] args) {

		Scanner scanner = new Scanner(System.in);
		
		int x = scanner.nextInt();
		int arr[] = new int[x];
		
		for(int i = 0; i < x; i++) {
			int y = scanner.nextInt();
			int z = scanner.nextInt();
			arr[i] = y + z;
		}
		
		for(int a : arr) {
			System.out.println(a);
		}
	}
}