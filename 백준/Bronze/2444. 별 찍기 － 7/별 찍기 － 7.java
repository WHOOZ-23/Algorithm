import java.util.Scanner;

public class Main {

	public static void main(String[] args) {		
		Scanner scanner = new Scanner(System.in);
		
		int N = scanner.nextInt();
		scanner.close();
		
		if(1<=N && N<=100) {
			for(int i=1; i<=2*N-1; i++) {
				if(i%2==1) {
					for(int j=1; j<=(2*N-1-i)/2; j++) {
						System.out.print(" ");
					}
					for(int k=1; k<=i; k++) {
						System.out.print("*");
					}
				} else {
					System.out.println();
				}
			}
			for(int i=2*N-2; i>=1; i--) {
				if(i%2==1) {
					for(int j=1; j<=(2*N-1-i)/2; j++) {
						System.out.print(" ");
					}
					for(int k=1; k<=i; k++) {
						System.out.print("*");
					}
				} else {
					System.out.println();
				}
			}
		}
	}
}