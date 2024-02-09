import java.util.Arrays;
import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		int N = scanner.nextInt();
		String[][] member = new String[N][2];
		
		for(int i=0; i<N; i++) {
			for(int j=0; j<2; j++) {
				member[i][j] = scanner.next();
			}
		}
		
		Arrays.sort(member, (m1, m2) -> {
			return Integer.parseInt(m1[0])-Integer.parseInt(m2[0]);
		});
		
		for(String m[]:member) {
			System.out.println(m[0] + " " + m[1]);
		}
		
		scanner.close();
	}
}