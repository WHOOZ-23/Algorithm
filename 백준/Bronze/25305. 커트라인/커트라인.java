import java.util.Arrays;
import java.util.Collections;
import java.util.Scanner;

public class Main {	
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		int N = scanner.nextInt();
		int k = scanner.nextInt();
		Integer[] rank = new Integer[N];
		
		for(int i=0; i<N; i++) {
			rank[i] = scanner.nextInt();
		}
		
		Arrays.sort(rank, Collections.reverseOrder());
		
		System.out.println(rank[k-1]);
		
		scanner.close();
	}
}