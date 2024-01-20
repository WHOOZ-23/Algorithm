import java.util.Scanner;

public class Main {
	
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		int N = scanner.nextInt();
		int answer = 0;
		int num = 666;
		
		while(N!=0) {
			if(String.valueOf(num).contains("666")) {
				answer = num;
				N--;
			}
			num++;
		}
		
		System.out.println(answer);
		
		scanner.close();
	}
}