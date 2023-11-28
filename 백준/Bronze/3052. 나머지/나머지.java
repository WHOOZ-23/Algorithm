import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
				
		int[] arr = new int[42];
		int count = 0;
		
		for(int i=0; i<10; i++) {
			int A = scanner.nextInt();
			arr[A%42] = A % 42 + 1;
		}
		
		for(int j=0; j<42; j++) {
			if(arr[j] >= 1) {
				count++;
			}
		}
		
		System.out.println(count);
		scanner.close();
	}
}