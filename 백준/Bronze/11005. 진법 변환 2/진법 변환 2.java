import java.util.Scanner;

public class Main {

	public static void main(String[] args) {		
		Scanner scanner = new Scanner(System.in);
		
		int N = scanner.nextInt();
		int B = scanner.nextInt();
		
		StringBuilder sb = new StringBuilder();
		
		if(2<=B && B<=36) {
			while(0 != N) {
				int r = N % B;
				char a;
				if(10<=r && r<=35) {
					a = (char)(r + 55);
					sb.append(a);
				} else {
					a = (char)(r + 48);
					sb.append(a);
				}
				N = N/B;
			}
			System.out.println(sb.reverse());
		}
		scanner.close();
	}
}