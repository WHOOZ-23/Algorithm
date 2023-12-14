import java.util.Scanner;

public class Main {

	public static void main(String[] args) {		
		Scanner scanner = new Scanner(System.in);
		
		int[] arr = new int[6];
		
		for(int i=0; i<6; i++) {
			
			int piece = scanner.nextInt();
			
			if(0<=piece && piece<=10) {
				arr[i] = piece;
			}
		}	
		scanner.close();
		
		int[] arr2 = {1, 1, 2, 2, 2, 8};
		int[] arr3 = new int[6];
		
		for(int j=0; j<6; j++) {
			arr3[j] = arr2[j] - arr[j];			
		}
		
		for(int a:arr3) {
			System.out.print(a + " ");
		}
	}
}