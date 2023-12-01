import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		int T = scanner.nextInt();
		
		if(1<=T && T <=10) {
			for(int i=0; i<T; i++) {
				String str = scanner.next();	
				
				if(str.length()<1000) {
					System.out.println(str.charAt(0) + "" + str.charAt(str.length()-1));
				}
			}
		}
		scanner.close();
	}
}