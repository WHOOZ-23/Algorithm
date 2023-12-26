import java.util.Scanner;

public class Main {

	public static void main(String[] args) {		
		Scanner scanner = new Scanner(System.in);
		
		int N = scanner.nextInt();
		
		if(1<=N && N<=15) {
			int x = 2;
			
			for(int i=0; i<N; i++) {
				x += (int)Math.pow(2, i);
			}
			System.out.println(x*x);
		}
		scanner.close();
	}
}