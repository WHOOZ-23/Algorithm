import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		int x = scanner.nextInt();
		int y = scanner.nextInt();
		int z = scanner.nextInt();
		
		if(x==60 && y==60 && z==60) {
			System.out.println("Equilateral");
		} else if(x+y+z==180 && (x==y || y==z || x==z)) {
			System.out.println("Isosceles");
		} else if(x+y+z==180 && (x!=y && y!=z && x!=z)) {
			System.out.println("Scalene");
		} else {
			System.out.println("Error");
		}
		
		scanner.close();
	}
}