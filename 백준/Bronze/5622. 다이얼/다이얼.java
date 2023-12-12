import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		String str = scanner.next();
		scanner.close();
		int second = 0;
		
		if(2<=str.length() && str.length()<=15) {
			for(int i=0; i<str.length(); i++) {
				char ch = str.charAt(i);
				if(ch=='A' || ch=='B' || ch=='C') {
					second += 3;
				} else if(ch=='D' || ch=='E' || ch=='F') {
					second += 4;
				} else if(ch=='G' || ch=='H' || ch=='I') {
					second += 5;
				} else if(ch=='J' || ch=='K' || ch=='L') {
					second += 6;
				} else if(ch=='M' || ch=='N' || ch=='O') {
					second += 7;
				} else if(ch=='P' || ch=='Q' || ch=='R' || ch=='S') {
					second += 8;
				} else if(ch=='T' || ch=='U' || ch=='V') {
					second += 9;
				} else if(ch=='W' || ch=='X' || ch=='Y' || ch=='Z') {
					second += 10;
				}
			}
			System.out.println(second);
		}
	}
}