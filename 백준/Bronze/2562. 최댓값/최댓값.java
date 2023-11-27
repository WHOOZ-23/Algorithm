import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		int[] arr = new int[9];
		int max = 0;
		int index = 0;
		
		for(int i=0; i < 9; i++) {
			int x = scanner.nextInt();
			arr[i] = x;
		}
		
		for(int j=0; j < 9; j++) {
			max = Math.max(max, arr[j]);
			if(max == arr[j]) {
				index = j+1;
			}
		}
		System.out.println(max + "\n" + index);
		scanner.close();
	}
}