import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;

public class Main {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		String S = scanner.next();
		
		Set<String> words = new HashSet<>();
		
		for(int i=1; i<=S.length(); i++) {
			for(int j=0; j<i; j++) {
				words.add(S.substring(j, i));
			}
		}
		
		System.out.println(words.size());
		
		scanner.close();
	}
}