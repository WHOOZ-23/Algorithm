import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		int N = scanner.nextInt();
		Map<Integer, Integer> card = new HashMap<>();
		StringBuilder sb = new StringBuilder();
		
		for(int i=0; i<N; i++) {
			int c = scanner.nextInt();
			
			if(!card.containsKey(c)) {
				card.put(c, 1);
			} else {
				card.put(c, card.get(c)+1);
			}
		}
		
		int M = scanner.nextInt();
		
		for(int j=0; j<M; j++) {
			int s = scanner.nextInt();
			
			if(card.containsKey(s)) {
				sb.append(card.get(s) + " ");
			} else {
				sb.append("0 ");
			}
		}
		
		System.out.println(sb.toString());
		
		scanner.close();
	}
}