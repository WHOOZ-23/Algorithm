import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class Main {	
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		StringBuilder sb = new StringBuilder();
		
		int N = scanner.nextInt();
		Map<Integer, Integer> card = new HashMap<Integer, Integer>();
		
		for(int i=0; i<N; i++) {
			card.put(scanner.nextInt(), 0);
		}
		
		int M = scanner.nextInt();
		
		for(int j=0; j<M; j++) {
			if(card.get(scanner.nextInt()) != null) {
				sb.append("1 ");
			} else {
				sb.append("0 ");
			}
		}
		
		System.out.println(sb.toString());
		
		scanner.close();
	}
}