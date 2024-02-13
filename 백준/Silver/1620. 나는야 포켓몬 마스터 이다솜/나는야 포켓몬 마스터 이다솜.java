import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		int N = scanner.nextInt();
		int M = scanner.nextInt();
		Map<Integer, String> pokedex1 = new HashMap<>();
		Map<String, Integer> pokedex2 = new HashMap<>();
		StringBuilder sb = new StringBuilder();
		
		for(int i=1; i<=N; i++) {
			String str = scanner.next();
			pokedex1.put(i, str);
			pokedex2.put(str, i);
		}
		
		for(int j=0; j<M; j++) {
			String q = scanner.next();
			
			if(q.chars().allMatch(Character::isDigit)) {
				sb.append(pokedex1.get(Integer.parseInt(q)) + "\n");
			} else {
				sb.append(pokedex2.get(q) + "\n");
			}
		}
		
		System.out.println(sb.toString());
		
		scanner.close();
	}
}