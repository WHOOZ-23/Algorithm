import java.util.Scanner;

public class Main {

	public static void main(String[] args) {		
		Scanner scanner = new Scanner(System.in);
		
		String N = scanner.next();
		int B = scanner.nextInt();
		
		char[] arr = new char[N.length()];
		int decimal = 0;
		
		if(2<=B && B<=36) {
			for(int i=0; i<N.length(); i++) {
				arr[i] = N.charAt(i);
			}
			
			for(int j=0; j<arr.length; j++) {
				double a = Math.pow(B, arr.length-j-1);
				if(65<=arr[j] && arr[j]<=90) {
					decimal += (arr[j] - 55) * (int)a;
				} else {
					decimal += (arr[j] - 48) * (int)a;
				}
			}
			System.out.println(decimal);
		}
		scanner.close();
	}
}