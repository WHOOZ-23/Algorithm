import java.util.Scanner;

public class Main {
	public static int GCD(int a, int b) {
		if(a%b==0) {
			return b;
		} else {
			return GCD(b, a%b);
		}
	}
	
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		int N = scanner.nextInt();
		int[] trees = new int[N];
		
		for(int i=0; i<N; i++) {
			trees[i] = scanner.nextInt();
		}
		
		int space = trees[1]-trees[0];
		
		for(int j=2; j<trees.length; j++) {
			space = GCD(space, trees[j]-trees[j-1]);
		}
		
		System.out.println((trees[N-1]-trees[0])/space+1-N);
		
		scanner.close();
	}
}