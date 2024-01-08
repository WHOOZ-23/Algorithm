import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		int x = scanner.nextInt();
		int y = scanner.nextInt();
		int w = scanner.nextInt();
		int h = scanner.nextInt();
		
		if((1<=w && w<=1000) && (1<=h && h<=1000)) {
			if((1<=x && x<=w-1) && (1<=y && y<=h-1)) {				
				System.out.println(Math.min(Math.min(x, w-x), Math.min(y, h-y)));
			}
		}
		scanner.close();
	}
}