import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Scanner;
import java.util.Set;

public class Main {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		int N = scanner.nextInt();
		int M = scanner.nextInt();
		
		Set<Integer> union = new HashSet<>();
		List<Integer> inter = new ArrayList<>();
		
		for(int i=0; i<N; i++) {
			union.add(scanner.nextInt());
		}
		
		for(int j=0; j<M; j++) {
			int e = scanner.nextInt();
			
			if(union.contains(e)) {
				inter.add(e);
			}
			union.add(e);
		}
		
		System.out.println(union.size()-inter.size());
		
		scanner.close();
	}
}