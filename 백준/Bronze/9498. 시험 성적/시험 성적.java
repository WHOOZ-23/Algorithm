import java.util.Scanner;

public class Main {

	public static void main(String[] args) {

		Scanner scanner = new Scanner(System.in);
		
		int i = scanner.nextInt();
		
		if(100 >= i && i >= 90) {
			System.out.println("A");
		} else if(89 >= i && i >= 80) {
			System.out.println("B");
		} else if(79 >= i && i >= 70) {
			System.out.println("C");
		} else if(69 >= i && i >= 60) {
			System.out.println("D");
		} else {
			System.out.println("F");
		}
	}

}