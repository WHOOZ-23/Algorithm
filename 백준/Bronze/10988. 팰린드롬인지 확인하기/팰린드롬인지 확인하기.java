import java.util.Scanner;

public class Main {

	public static void main(String[] args) {		
		Scanner scanner = new Scanner(System.in);
		
		String str = scanner.next();
		scanner.close();
		
		String palindrome = "";
		StringBuilder sb = new StringBuilder();
		
		palindrome = sb.append(str).reverse().toString();
		
		System.out.println(str.equals(palindrome) ? 1 : 0);
	}
}