import java.util.Comparator;
import java.util.Map;
import java.util.Scanner;
import java.util.TreeMap;

public class Main {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		int n = scanner.nextInt();
		
		Comparator<String> reverse = Comparator.reverseOrder();
		Map<String, String> enterLog = new TreeMap<>(reverse);
		
		for(int i=0; i<n; i++) {
			enterLog.put(scanner.next(), scanner.next());
		}
		
		enterLog.entrySet().removeIf(entry -> entry.getValue().equals("leave"));
		
		enterLog.entrySet().forEach(entry -> System.out.println(entry.getKey()));
		
		scanner.close();
	}
}