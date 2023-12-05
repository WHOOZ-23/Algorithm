import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		int T = scanner.nextInt();
		
		if(1<=T && T<=1000) {
			for(int i=0; i<T; i++) {
				int R = scanner.nextInt();
				String S = scanner.next();
				
				for(int j=0; j<S.length(); j++) {
					char s = S.charAt(j);
					for(int k=0; k<R; k++) {
						System.out.print(s);						
					}
				}
				System.out.println();
			}
		}
		scanner.close();
	}
}