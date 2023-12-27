import java.util.Scanner;

public class Main {

	public static void main(String[] args) {		
		Scanner scanner = new Scanner(System.in);
		
		int N = scanner.nextInt();
		
		if(1<=N && N<=1000000000) {
			
			int h = 1, cnt = 1;
			
			while(N > h) {
				h = h + (6 * cnt);
				cnt++;
			}
			System.out.println(cnt);
		}
		scanner.close();
	}
}