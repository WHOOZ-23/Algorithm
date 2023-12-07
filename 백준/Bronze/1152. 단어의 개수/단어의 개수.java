import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		String s = scanner.nextLine().trim();
		String[] arr = s.split(" ");
		
		if(s.isEmpty()) {
			System.out.println(0);
		} else {
			System.out.println(arr.length);			
		}
		scanner.close();
	}
}