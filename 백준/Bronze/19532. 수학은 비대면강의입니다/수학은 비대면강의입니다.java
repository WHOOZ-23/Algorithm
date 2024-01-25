import java.util.Scanner;

public class Main {	
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		int a = scanner.nextInt();
		int b = scanner.nextInt();
		int c = scanner.nextInt();
		int d = scanner.nextInt();
		int e = scanner.nextInt();
		int f = scanner.nextInt();
		
		for(int i=-999; i<=999; i++) {
			int x = i;
			
			if(a*e*x - d*b*x == c*e - f*b) {
				System.out.print(x + " ");
			}
		}
		
		for(int j=-999; j<=999; j++) {
			int y = j;
			
			if(b*d*y - e*a*y == c*d - f*a) {
				System.out.println(y);
			}
		}
		
		scanner.close();
	}
}