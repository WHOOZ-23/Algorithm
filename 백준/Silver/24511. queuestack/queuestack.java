import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayDeque;
import java.util.Deque;
import java.util.StringTokenizer;

public class Main {
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		int N = Integer.parseInt(br.readLine());
		
		Deque<Integer> queue = new ArrayDeque<>();
		int[] isQueue = new int[N];
		StringTokenizer st = new StringTokenizer(br.readLine());
		StringBuilder sb = new StringBuilder();
		
		for(int i=0; i<N; i++) {
			isQueue[i] = Integer.valueOf(st.nextToken());
		}
		
		st = new StringTokenizer(br.readLine());
		
		for(int j=0; j<N; j++) {
			int q = Integer.parseInt(st.nextToken());
			
			if(isQueue[j]==0) {
				queue.add(q);
			}
		}
		
		int M = Integer.parseInt(br.readLine());
		
		st = new StringTokenizer(br.readLine());
		
		for(int k=0; k<M; k++) {
			int q = Integer.parseInt(st.nextToken());
			queue.offerFirst(q);
			sb.append(queue.pollLast() + " ");
		}
		
		System.out.println(sb.toString());
	}
}