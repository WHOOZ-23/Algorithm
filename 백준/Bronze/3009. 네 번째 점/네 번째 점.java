import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		int x1 = scanner.nextInt();
		int y1 = scanner.nextInt();
		int x2 = scanner.nextInt();
		int y2 = scanner.nextInt();
		int x3 = scanner.nextInt();
		int y3 = scanner.nextInt();
		
		if(x1==x2 && y1==y3) {
			System.out.println(x3 + " " + y2);
		} else if(x1==x3 && y1==y2) {
			System.out.println(x2 + " " + y3);
		} else if(x2==x3 && y1==y2) {
			System.out.println(x1 + " " + y3);
		} else if(x2==x3 && y1==y3) {
			System.out.println(x1 + " " + y2);
		} else if(x1==x2 && y2==y3) {
			System.out.println(x3 + " " + y1);
		} else if(x1==x3 && y2==y3) {
			System.out.println(x2 + " " + y1);
		}
		scanner.close();
	}
}