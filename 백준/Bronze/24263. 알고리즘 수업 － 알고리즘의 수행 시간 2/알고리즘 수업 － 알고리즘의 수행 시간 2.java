import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		int n = scanner.nextInt();
		int sum = 0;
		
		for(int i=0; i<n; i++) {
			sum += 1;
		}
		
		System.out.println(sum);
		System.out.println(1);
		
		scanner.close();
	}
}