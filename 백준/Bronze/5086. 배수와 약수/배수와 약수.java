import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		while(true) {
			int x = scanner.nextInt();
			int y = scanner.nextInt();
			
			if(x==0 && y==0) {
				break;
			}
			
			if(y%x==0) {
				System.out.println("factor");
			} else if(x%y==0) {
				System.out.println("multiple");
			} else {
				System.out.println("neither");
			}
		}
		scanner.close();
	}
}