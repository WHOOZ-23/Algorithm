import java.util.Scanner;

public class Main {

	public static void main(String[] args) {		
		Scanner scanner = new Scanner(System.in);
		
		String str = scanner.next();
		scanner.close();
		
		int[] arr = new int[26];
		int max = 0;
		int index = -1;
		
		str = str.toUpperCase();		
		
		for(int i=0; i<str.length(); i++) {
			arr[str.charAt(i)-65] += 1;
		}
		
		for(int a:arr) {
			max = Math.max(a, max);
		}
		
		for(int j=0; j<26; j++) {
			if(index > -1) {
				if(arr[index] == arr[j]) {
					System.out.println("?");
					break;
				}
			}
			
			if(max == arr[j]) {
				index = j;
			}
			if(j==25) {
				char alpha = (char)(index+65);
				
				System.out.println(alpha);				
			}
		}
	}
}