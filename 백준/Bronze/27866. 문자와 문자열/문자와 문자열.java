import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		String str = scanner.next();
		int i = scanner.nextInt();
		
		System.out.println(str.charAt(i-1));
		
		scanner.close();
	}
}