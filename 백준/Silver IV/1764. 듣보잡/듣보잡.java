import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		int N = scanner.nextInt();
		int M = scanner.nextInt();
		
		Map<String, String> list = new HashMap<>();
		List<String> dbj = new ArrayList<>();
		
		for(int i=0; i<N; i++) {
			String d = scanner.next();
			
			list.put(d, d);
		}
		
		for(int j=0; j<M; j++) {
			String b = scanner.next();
			
			if(list.containsKey(b)) {
				dbj.add(b);
			}
		}
		
		Collections.sort(dbj);
		
		System.out.println(dbj.size());
		
		for(String db:dbj) {
			System.out.println(db);
		}
		
		scanner.close();
	}
}