import java.util.Scanner;

public class Main {
	static int cnt = 0;
	
	public static int recursion(String s ,int l, int r) {
		cnt++;
		
		if(l>=r) {
			return 1;
		} else if(s.charAt(l) != s.charAt(r)) {
			return 0;
		} else {
			return recursion(s , l+1, r-1);
		}
	}
	
	public static int isPalindrome(String s) {
		return recursion(s, 0, s.length()-1);
	}
	
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		int T = scanner.nextInt();
		int[][] arr = new int[T][2];
		
		for(int i=0; i<T; i++) {
			cnt = 0;
			arr[i][0] = isPalindrome(scanner.next());
			arr[i][1] = cnt;
		}
		
		for(int a[]:arr) {
			System.out.println(a[0] + " " + a[1]);
		}
		
		scanner.close();
	}
}