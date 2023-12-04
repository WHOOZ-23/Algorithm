import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		int N = scanner.nextInt();
		
		if(1<=N && N<=100) {
			String num = scanner.next();
			scanner.close();
			char[] arr = num.toCharArray();
			
			int sum = 0;
			for(int i=0; i<N; i++) {
				sum += arr[i]-'0';
			}
			System.out.println(sum);
		}		
	}
}