import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		int[] arr = new int[26];
		
		for(int i=0; i<arr.length; i++) {
			arr[i] = -1;
		}
		
		String S = scanner.next();
		scanner.close();
		
		if(S.length()<=100) {
			for(int j=0; j<S.length(); j++) {
				char ch = S.charAt(j);
				
				if(arr[ch-97] == -1) {
					arr[ch-97] = j;
				}
			}
			
			for(int a:arr) {
				System.out.print(a + " ");
			}
		}
	}
}