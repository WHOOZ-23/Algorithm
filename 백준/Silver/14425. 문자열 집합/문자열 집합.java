import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		int N = scanner.nextInt();
		int M = scanner.nextInt();
		Map<String, Integer> words = new HashMap<>();
		int cnt = 0;
		
		for(int i=0; i<N; i++) {
			words.put(scanner.next(), 0);
		}
		
		for(int j=0; j<M; j++) {
			if(words.containsKey(scanner.next())) {
				cnt++;
			}
		}
		
		System.out.println(cnt);
		
		scanner.close();
	}
}