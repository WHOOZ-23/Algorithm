import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		int N = scanner.nextInt();
		
		int[] arr = new int[N];
		int cnt = 0;
		
		if(N<=100) {
			for(int i=0; i<N; i++) {
				int x = scanner.nextInt();
				if(x<=1000) {
					arr[i] = x;
				}
			}
			
			for(int a:arr) {
				for(int j=1; j<a; j++) {
					if(a%j==0) {
						if(j!=1) {
							cnt--;
							break;
						} else {
							cnt++;
						}
					}
				}
			}
			System.out.println(cnt);
		}
		scanner.close();
	}
}