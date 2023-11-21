import java.util.Scanner;

public class Main {

	public static void main(String[] args) {

		Scanner scanner = new Scanner(System.in);
		
		int h = scanner.nextInt();
		int m = scanner.nextInt();
		int t = scanner.nextInt();
		
		if(m+t >= 60) {
			h = h + (m+t)/60;
			if(h > 23) {
				h = h - 24;
			} 
			m = (m+t)%60;
			System.out.println(h +" "+ m);
		} else {
			h = h + (m+t)/60;
			if(h > 23) {
				h = h - 24;
				m = (m+t)%60;
			} else {
				h = h + (m+t)/60;
				m = m+t;
			}
			System.out.println(h +" "+ m);
		}
	}

}