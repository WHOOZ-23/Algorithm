import java.util.Scanner;

public class Main {

	public static void main(String[] args) {

		Scanner scanner = new Scanner(System.in);
		
		int x = scanner.nextInt();
		int y, z;
		
		for(int i = 1; i <= x; i++) {
			y = scanner.nextInt();
			z = scanner.nextInt();
			System.out.println(y+z);
		}
	}
}