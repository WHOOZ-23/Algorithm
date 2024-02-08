import java.util.Arrays;
import java.util.Scanner;
import java.util.Set;
import java.util.TreeSet;

public class Main {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		int N = scanner.nextInt();
		Set<String> word = new TreeSet<>();
		
		for(int i=0; i<N; i++) {
			word.add(scanner.next());
		}
		
		String[] words = word.toArray(new String[0]);
		
		Arrays.sort(words, (w1, w2) -> {
			return w1.length()-w2.length();
		});
		
		for(String w:words) {
			System.out.println(w);
		}
		
		scanner.close();
	}
}