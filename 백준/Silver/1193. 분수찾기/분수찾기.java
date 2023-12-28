import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		int X = scanner.nextInt();
		
		int i = 1;
		int a = 0;
		int b = 0;
		
		if(i<=X && X<=10000000) {
			while(X > i) {
				X -= i;
				i++;
			}
			
			if(i%2 == 0) {
				a = X;
				b = i - X + 1;
			}
			
			if(i%2 == 1) {
				a = i - X + 1;
				b = X;
			}
			System.out.println(a + "/" + b);
		}
		scanner.close();
	}
}