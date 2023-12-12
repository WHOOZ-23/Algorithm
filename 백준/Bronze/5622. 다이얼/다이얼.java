import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		String str = scanner.next();
		scanner.close();
		int second = 0;
		
		if(2<=str.length() && str.length()<=15) {
			for(int i=0; i<str.length(); i++) {
				char ch = str.charAt(i);
				if(65<=ch && ch<=67) {
					second += 3;
				} else if(68<=ch && ch<=70) {
					second += 4;
				} else if(71<=ch && ch<=73) {
					second += 5;
				} else if(74<=ch && ch<=76) {
					second += 6;
				} else if(77<=ch && ch<=79) {
					second += 7;
				} else if(80<=ch && ch<=83) {
					second += 8;
				} else if(84<=ch && ch<=86) {
					second += 9;
				} else if(87<=ch && ch<=90) {
					second += 10;
				}
			}
			System.out.println(second);
		}
	}
}