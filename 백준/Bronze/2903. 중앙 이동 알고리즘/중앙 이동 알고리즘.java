import java.util.Scanner;

public class Main {

	public static void main(String[] args) {		
		Scanner scanner = new Scanner(System.in);
		
		int N = scanner.nextInt();
		
		if(1<=N && N<=15) {
			int x = 2;
			
			for(int i=0; i<N; i++) {
				x = 2*x - 1;
			}
			System.out.println((int)Math.pow(x, 2));
		}
		scanner.close();
	}
}