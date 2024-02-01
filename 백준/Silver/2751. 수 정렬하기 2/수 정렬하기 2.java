import java.util.Arrays;
import java.util.Scanner;

public class Main {	
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		StringBuilder sb = new StringBuilder();
		
		int N = scanner.nextInt();
		int[] arr = new int[N];
		
		for(int i=0; i<N; i++) {
			arr[i] = scanner.nextInt();
		}
		
		Arrays.sort(arr);
		
		for(int a:arr) {
			sb.append(a+"\n");
		}
		
		System.out.println(sb.toString());
		
		scanner.close();
	}
}