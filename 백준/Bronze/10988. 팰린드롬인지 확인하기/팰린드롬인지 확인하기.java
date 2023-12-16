import java.util.Scanner;

public class Main {

	public static void main(String[] args) {		
		Scanner scanner = new Scanner(System.in);
		
		String str = scanner.next();
		scanner.close();
		
		String palindrome = "";
		
		for(int i=str.length()-1; i>=0; i--) {
			palindrome += str.charAt(i);
		}
		
		System.out.println(str.equals(palindrome) ? 1 : 0);
	}
}