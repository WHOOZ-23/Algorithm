import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		int N = scanner.nextInt();
		float[] arr = new float[N];
		float M = 0;
		float sum = 0;
		float avg = 0;
		
		if(N<=1000) {
			for(int i=0; i<N; i++) {
				int score = scanner.nextInt();
				arr[i] = (float)score;
				M = Math.max(M, arr[i]);
			}
			
			for(float a:arr) {
				sum = sum + (a/M*100);
			}
			avg = sum/N;
			System.out.println(avg);
		}
		
		scanner.close();
	}
}