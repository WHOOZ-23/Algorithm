import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		int N = scanner.nextInt();
		int sum = 0;
		
		if(1<=N && N<=100) {
			String num = scanner.next();
			scanner.close();
			
			for(int j=0; j<N; j++) {
				sum += num.charAt(j)-'0';				
			}
			System.out.println(sum);
		}
		
	}
}