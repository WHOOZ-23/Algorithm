import java.util.Scanner;

public class Main {
	public static int GCD(int a, int b) {
		if(a%b==0) {
			return b;
		} else {
			return GCD(b, a%b);
		}
	}
	
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		int numer1 = scanner.nextInt();
		int denom1 = scanner.nextInt();
		int numer2 = scanner.nextInt();
		int denom2 = scanner.nextInt();
		
		int numer = numer1*denom2 + numer2*denom1;
		int denom = denom1*denom2;
		
		int getGCD = GCD(numer, denom);
		
		System.out.print(numer/getGCD + " " + denom/getGCD);
		
		scanner.close();
	}
}