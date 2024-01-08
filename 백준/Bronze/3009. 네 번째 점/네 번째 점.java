import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		int[][] square = new int[3][2];
		
		for(int i=0; i<3; i++) {
			for(int j=0; j<2; j++) {
				square[i][j] = scanner.nextInt();
			}
		}
		
		int x = square[0][0]^square[1][0]^square[2][0];
		int y = square[0][1]^square[1][1]^square[2][1];
		
		System.out.println(x + " " + y);
		
		scanner.close();
	}
}