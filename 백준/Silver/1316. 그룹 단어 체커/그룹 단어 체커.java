import java.util.Scanner;

public class Main {

	public static void main(String[] args) {		
		Scanner scanner = new Scanner(System.in);
		
		int N = scanner.nextInt();
		int count = N;
		
		for(int i=0; i<N; i++) {
			
			String str = scanner.next();
			int[] arr = new int[26];
			
			for(int j=0; j<str.length(); j++) {				
				if(j>0) {
					if(arr[str.charAt(j)-97]==1 && str.charAt(j-1)!=str.charAt(j)) {
						count--;
						break;
					}					
				}
				arr[str.charAt(j)-97] = 1;
			}
		}
		System.out.println(count);
		
		scanner.close();
	}
}