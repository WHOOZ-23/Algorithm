import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		int x = scanner.nextInt();
		int y = scanner.nextInt();
		int w = scanner.nextInt();
		int h = scanner.nextInt();
		
		int minX = w;
		int minY = h;
		
		if((1<=w && w<=1000) && (1<=h && h<=1000)) {
			if((1<=x && x<=w-1) && (1<=y && y<=h-1)) {
				minX = x < w-x ? x : w-x;
				minY = y < h-y ? y : h-y;
				
				System.out.println(Math.min(minX, minY));
			}
		}
		scanner.close();
	}
}