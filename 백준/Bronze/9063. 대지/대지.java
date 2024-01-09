import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		int N = scanner.nextInt();
		
		int[][] land = new int[N][2];
		
		int maxX = -10000;
		int minX = 10000;
		int maxY = -10000;
		int minY = 10000;
		
		for(int i=0; i<N; i++) {
			for(int j=0; j<2; j++) {
				land[i][j] = scanner.nextInt();
			}
		}
		
		for(int i=0; i<N; i++) {
			maxX = Math.max(maxX, land[i][0]);
			minX = Math.min(minX, land[i][0]);
			maxY = Math.max(maxY, land[i][1]);
			minY = Math.min(minY, land[i][1]);
		}
		
		System.out.println((maxX-minX)*(maxY-minY));
		
		scanner.close();
	}
}