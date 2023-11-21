import java.util.Scanner;

public class Main {

	public static void main(String[] args) {

		Scanner scanner = new Scanner(System.in);
		
		int a = scanner.nextInt();
		int b = scanner.nextInt();
		int c = scanner.nextInt();
		int x;
		
		if(a == b && b == c && c == a) {
			x = 10000 + a*1000;
		} else if(a == b || b == c || c == a) {
			if(a == b) {
				x = 1000 + a*100;
			} else if(b == c) {
				x = 1000 + b*100;
			} else {
				x = 1000 + c*100;
			}
		} else {
			int max = Math.max(a, Math.max(b, c));
			x = max*100;
		}
		System.out.println(x);
	}
}