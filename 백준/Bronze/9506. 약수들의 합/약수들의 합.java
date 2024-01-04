import java.util.ArrayList;
import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		while(true) {
			int n = scanner.nextInt();
			
			ArrayList<Integer> arr = new ArrayList<Integer>();
			int sum = 0;
			
			if(n == -1) {
				break;
			}
			
			for(int i=1; i<n; i++) {
				if(n%i == 0) {
					arr.add(i);
					sum += i;
				}
			}
			
			if(sum == n) {
				System.out.print(n + " = ");
				for(int j=0; j<arr.size(); j++) {
					System.out.print(arr.get(j));
					if(j != arr.size()-1) {
						System.out.print(" + ");
					}
				}
				System.out.println();
			} else {
				System.out.printf("%d is NOT perfect. %n".formatted(n));
			}
		}
		scanner.close();
	}
}