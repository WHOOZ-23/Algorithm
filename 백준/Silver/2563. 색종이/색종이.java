import java.util.Scanner;

public class Main {

	public static void main(String[] args) {		
		Scanner scanner = new Scanner(System.in);
		
		int n = scanner.nextInt();
		int[][] whitepaper = new int[100][100];
		int colorpaper = 0;
		
		if(n<=100) {
			for(int i=0; i<n; i++) {
				int x = scanner.nextInt();
				int y = scanner.nextInt();
				
				if(x<=90 && y<=90) {
					for(int j=x; j<x+10; j++) {
						for(int k=y; k<y+10; k++) {
							if(whitepaper[j][k] == 0) {
								whitepaper[j][k] += 1;
								colorpaper++;
							}
						}
					}
				}
			}
			System.out.println(colorpaper);
		}
		scanner.close();
	}
}