import java.util.Scanner;

public class Main {

	public static void main(String[] args) {

		Scanner scanner = new Scanner(System.in);
		
		int x = scanner.nextInt();
		int y;
		
		for(y = 1; y <= 9; y++) {
			System.out.println(x + " * " + y + " = " + (x*y));
		}
	}
}