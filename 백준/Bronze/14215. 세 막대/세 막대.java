import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		int[] arr = new int[3];
		int max = 0;
		int sum = 0;
		
		for(int i=0; i<3; i++) {
			arr[i] = scanner.nextInt();
			max = Math.max(max, arr[i]);
			sum += arr[i];
		}
		
		if(sum-max <= max) {
			for(int j=0; j<3; j++) {
				if(max == arr[j]) {
					arr[j] = sum - max - 1;
					sum = sum - max + arr[j];
				}
			}
		}
		
		System.out.println(sum);
		
		scanner.close();
	}
}