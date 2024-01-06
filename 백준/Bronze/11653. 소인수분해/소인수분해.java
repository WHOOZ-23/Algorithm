import java.util.ArrayList;
import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		int N = scanner.nextInt();
		
		ArrayList<Integer> arr = new ArrayList<Integer>();
		
		if(N==1) {
			System.out.println();
		}
		
		int i = 2;
		
		while(N!=1) {
			if(N%i==0) {
				arr.add(i);
				N = N / i;
			} else {
				i++;
			}
		}
		
		for(int a:arr) {
			System.out.println(a);
		}		
		scanner.close();
	}
}