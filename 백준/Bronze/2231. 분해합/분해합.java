import java.util.Scanner;

public class Main {	
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		int N = scanner.nextInt();
		
		for(int i=1; i<=N; i++) {
			int num = i;
			int result = i;
			
			for(int j=0; j<Integer.toString(i).length(); j++) {
				result += num%10;
				num/=10;
			}
			
			if(result==N) {
				System.out.println(i);
				break;
			} else if(i==N) {
				System.out.println(0);
			}
		}
		
		scanner.close();
	}
}