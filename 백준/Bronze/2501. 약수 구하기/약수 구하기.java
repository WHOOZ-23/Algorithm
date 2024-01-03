import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		int N = scanner.nextInt();
		int K = scanner.nextInt();
		
		List<Integer> arr = new ArrayList<>();
		
		if(1<=N && N<=10000) {
			for(int i=1; i<=N; i++) {
				if(N%i==0) {
					arr.add(i);
				}
			}
			
			if(K>arr.size()) {
				System.out.println("0");
			} else {
				System.out.println(arr.get(K-1));
			}
		}
		scanner.close();
	}
}