import java.util.Scanner;

public class Main {
	public static long getGCD(long a, long b) {
		if(b==0) return a;
		return getGCD(b, a%b);
	}
	
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		long A = scanner.nextLong();
		long B = scanner.nextLong();
		
		System.out.println(A*B/getGCD(A, B));
		
		scanner.close();
	}
}