import java.util.Scanner;

public class Main {

	public static void main(String[] args) {		
		Scanner scanner = new Scanner(System.in);
		
		int N = scanner.nextInt();
		
		if(1<=N && N<=1000000000) {
			int x = 0;
			for(int i=0; i<N/6+1; i++) {
				x += i;
				
				if(N==1) {
					System.out.print(1);
				}
				
				if(6*x+2<=N && N<=6*(x+(i+1))+1) {
					System.out.print(i+2);
					break;
				} 
			}
		}
		scanner.close();
	}
}