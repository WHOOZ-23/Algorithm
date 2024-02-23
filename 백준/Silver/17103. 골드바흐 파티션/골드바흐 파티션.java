import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
	public static boolean[] prime;
	
	public static void isPrime(int num) {
		prime = new boolean[num+1];
		
		prime[0] = prime[1] = true;
		
		for(int i=2; i<=Math.sqrt(num); i++) {
			if(!prime[i]) {
				for(int j=i*i; j<=num; j+=i) {
					prime[j] = true;
				}
			}
		}
	}
	
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		int T = Integer.parseInt(br.readLine());
		
		StringBuilder sb = new StringBuilder();
		
		for(int i=0; i<T; i++) {
			int N = Integer.parseInt(br.readLine());
			int cnt = 0;
			
			isPrime(N);
			
			for(int j=2; j<=N/2; j++) {
				if(!prime[j] && !prime[N-j]) {
					cnt++;
				}
			}
			
			sb.append(cnt+"\n");
		}
		
		System.out.println(sb.toString());
		
		br.close();
	}
}