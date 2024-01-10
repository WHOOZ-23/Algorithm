import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		while(true) {
			
			int x = scanner.nextInt();
			int y = scanner.nextInt();
			int z = scanner.nextInt();
			
			int max = Math.max(x, Math.max(y, z));
			
			if(x==0 && y==0 && z==0) {
				break;
			}
			
			if(x==y && y==z && x==z) {
				System.out.println("Equilateral");
			} else if(x+y+z-max <= max) {
				System.out.println("Invalid");
			} else if(x==y || y==z || x==z) {
				System.out.println("Isosceles");
			} else if(x!=y && y!=z && x!=z) {
				System.out.println("Scalene");
			}
		}
		scanner.close();
	}
}