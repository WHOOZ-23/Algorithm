import java.util.Scanner;

public class Main {

	public static void main(String[] args) {

		Scanner scanner = new Scanner(System.in);
		
		int H = scanner.nextInt();
		int M = scanner.nextInt();
		
		if( M < 45) {
			if(H > 0) {
				H = H - 1;
			} else {
				H = H + 23;
			}
			M = M + 15;
			System.out.println(H + " " + M);
		} else {
			M = M - 45;
			System.out.println(H + " " + M);
		}
	}

}