import java.util.Scanner;

public class Main {

	public static void main(String[] args) {

		Scanner scanner = new Scanner(System.in);
		
		int x = scanner.nextInt();
		int y;
		
		if(1 <= x && x <= 9) {
			for(y = 1; y < 10; y++) {
				System.out.println(x + " * " + y + " = " + (x*y));
			}			
		}
	}
}